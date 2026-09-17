using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Audit;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Modules.Subscriptions;

namespace PromptVideo.Api.Modules.Exports;

public sealed class ExportOptions
{
    /// <summary>
    /// How long a reservation holds its slot before the sweep may release it, so
    /// a browser that is closed mid-export does not strand a quota slot.
    /// </summary>
    public TimeSpan ReservationLifetime { get; set; } = TimeSpan.FromMinutes(30);

    /// <summary>Resolutions the API will consider. Requests outside this set are rejected.</summary>
    public int[] SupportedHeights { get; set; } = [720, 1080];
}

public enum ReserveOutcome
{
    Reserved,
    AlreadyReserved,
    QuotaExceeded,
    UnsupportedHeight,
}

public sealed record ReserveResult(
    ReserveOutcome Outcome,
    ExportReservation? Reservation,
    CapabilitySnapshot? Capabilities);

public enum ResolveOutcome
{
    Resolved,
    AlreadyResolved,
    NotFound,
    Conflict,
    Expired,
}

public sealed record ResolveResult(ResolveOutcome Outcome, ExportReservation? Reservation);

/// <summary>
/// Implements the reserve → complete/cancel protocol.
///
/// Two invariants drive the design. A retry with the same idempotency key must
/// return the original reservation rather than consume a second slot, which the
/// unique index on (UserId, IdempotencyKey) guarantees. Concurrent reserves must
/// not exceed the quota, which the <c>xmin</c> concurrency token on
/// <see cref="UsagePeriod"/> guarantees: the loser of the race retries against
/// the freshly read count instead of overwriting it.
/// </summary>
public sealed class ExportReservationService(
    ApplicationDbContext database,
    EntitlementService entitlements,
    AuditService audit,
    TimeProvider clock,
    IOptions<ExportOptions> options)
{
    private const int MaxConcurrencyAttempts = 5;

    public async Task<ReserveResult> ReserveAsync(
        Guid userId,
        string idempotencyKey,
        int requestedHeight,
        CancellationToken cancellationToken = default)
    {
        if (!options.Value.SupportedHeights.Contains(requestedHeight))
        {
            return new ReserveResult(ReserveOutcome.UnsupportedHeight, null, null);
        }

        for (var attempt = 1; ; attempt++)
        {
            try
            {
                return await TryReserveAsync(userId, idempotencyKey, requestedHeight, cancellationToken);
            }
            catch (DbUpdateConcurrencyException) when (attempt < MaxConcurrencyAttempts)
            {
                // Another reserve committed against the same usage period. Drop the
                // stale tracked state and re-evaluate the quota from the new count.
                database.ChangeTracker.Clear();
            }
            catch (DbUpdateException exception) when (IsUniqueViolation(exception) && attempt < MaxConcurrencyAttempts)
            {
                // Either the same idempotency key or the same usage period was
                // inserted concurrently; both resolve by re-reading.
                database.ChangeTracker.Clear();
            }
        }
    }

    private async Task<ReserveResult> TryReserveAsync(
        Guid userId,
        string idempotencyKey,
        int requestedHeight,
        CancellationToken cancellationToken)
    {
        var now = clock.GetUtcNow();

        var existing = await database.ExportReservations
            .AsNoTracking()
            .FirstOrDefaultAsync(
                reservation => reservation.UserId == userId && reservation.IdempotencyKey == idempotencyKey,
                cancellationToken);
        if (existing is not null)
        {
            var plan = await entitlements.ResolvePlanAsync(userId, now, cancellationToken);
            var period = await GetOrCreatePeriodAsync(userId, now, cancellationToken);
            return new ReserveResult(
                ReserveOutcome.AlreadyReserved,
                existing,
                entitlements.BuildSnapshot(plan, period.ExportsConsumed, now));
        }

        await ReleaseExpiredAsync(userId, now, cancellationToken);

        var currentPlan = await entitlements.ResolvePlanAsync(userId, now, cancellationToken);
        var usagePeriod = await GetOrCreatePeriodAsync(userId, now, cancellationToken);
        var snapshot = entitlements.BuildSnapshot(currentPlan, usagePeriod.ExportsConsumed, now);

        if (!snapshot.HasUnlimitedExports && usagePeriod.ExportsConsumed >= snapshot.ExportsPerMonth)
        {
            audit.Record(AuditActions.ExportQuotaExceeded, nameof(UsagePeriod), usagePeriod.Id.ToString(), userId);
            await database.SaveChangesAsync(cancellationToken);
            return new ReserveResult(ReserveOutcome.QuotaExceeded, null, snapshot);
        }

        var reservation = new ExportReservation
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            IdempotencyKey = idempotencyKey,
            UsagePeriodId = usagePeriod.Id,
            Status = ExportReservationStatus.Reserved,
            // The plan decides the resolution, so an over-ambitious request is
            // clamped rather than rejected; the client renders what it is granted.
            GrantedHeight = Math.Min(requestedHeight, snapshot.MaxExportHeight),
            WatermarkRequired = snapshot.WatermarkRequired,
            PlanCode = snapshot.PlanCode,
            CreatedAtUtc = now,
            ExpiresAtUtc = now.Add(options.Value.ReservationLifetime),
        };

        database.ExportReservations.Add(reservation);
        usagePeriod.ExportsConsumed++;
        audit.Record(AuditActions.ExportReserved, nameof(ExportReservation), reservation.Id.ToString(), userId);
        await database.SaveChangesAsync(cancellationToken);

        return new ReserveResult(
            ReserveOutcome.Reserved,
            reservation,
            entitlements.BuildSnapshot(currentPlan, usagePeriod.ExportsConsumed, now));
    }

    public async Task<ResolveResult> CompleteAsync(
        Guid userId,
        Guid reservationId,
        CancellationToken cancellationToken = default)
    {
        var now = clock.GetUtcNow();
        var reservation = await database.ExportReservations
            .FirstOrDefaultAsync(item => item.Id == reservationId && item.UserId == userId, cancellationToken);
        if (reservation is null)
        {
            return new ResolveResult(ResolveOutcome.NotFound, null);
        }

        switch (reservation.Status)
        {
            case ExportReservationStatus.Completed:
                return new ResolveResult(ResolveOutcome.AlreadyResolved, reservation);
            case ExportReservationStatus.Canceled:
                return new ResolveResult(ResolveOutcome.Conflict, reservation);
            default:
                break;
        }

        if (reservation.IsExpiredAt(now))
        {
            return new ResolveResult(ResolveOutcome.Expired, reservation);
        }

        reservation.Status = ExportReservationStatus.Completed;
        reservation.ResolvedAtUtc = now;
        audit.Record(AuditActions.ExportCompleted, nameof(ExportReservation), reservation.Id.ToString(), userId);
        await database.SaveChangesAsync(cancellationToken);
        return new ResolveResult(ResolveOutcome.Resolved, reservation);
    }

    public async Task<ResolveResult> CancelAsync(
        Guid userId,
        Guid reservationId,
        CancellationToken cancellationToken = default)
    {
        var now = clock.GetUtcNow();
        for (var attempt = 1; ; attempt++)
        {
            var reservation = await database.ExportReservations
                .FirstOrDefaultAsync(item => item.Id == reservationId && item.UserId == userId, cancellationToken);
            if (reservation is null)
            {
                return new ResolveResult(ResolveOutcome.NotFound, null);
            }

            switch (reservation.Status)
            {
                case ExportReservationStatus.Canceled:
                    return new ResolveResult(ResolveOutcome.AlreadyResolved, reservation);
                case ExportReservationStatus.Completed:
                    // A finished export has already been counted; it is not refundable.
                    return new ResolveResult(ResolveOutcome.Conflict, reservation);
                default:
                    break;
            }

            reservation.Status = ExportReservationStatus.Canceled;
            reservation.ResolvedAtUtc = now;
            await ReleaseSlotAsync(reservation, cancellationToken);
            audit.Record(AuditActions.ExportCanceled, nameof(ExportReservation), reservation.Id.ToString(), userId);

            try
            {
                await database.SaveChangesAsync(cancellationToken);
                return new ResolveResult(ResolveOutcome.Resolved, reservation);
            }
            catch (DbUpdateConcurrencyException) when (attempt < MaxConcurrencyAttempts)
            {
                database.ChangeTracker.Clear();
            }
        }
    }

    /// <summary>
    /// Releases slots held by reservations that were never completed. Returns how
    /// many were released so the retention job can report its work.
    /// </summary>
    public async Task<int> ReleaseExpiredAsync(
        Guid? userId,
        DateTimeOffset now,
        CancellationToken cancellationToken = default)
    {
        var stale = await database.ExportReservations
            .Where(reservation =>
                reservation.Status == ExportReservationStatus.Reserved
                && reservation.ExpiresAtUtc <= now
                && (userId == null || reservation.UserId == userId))
            .ToListAsync(cancellationToken);

        foreach (var reservation in stale)
        {
            reservation.Status = ExportReservationStatus.Canceled;
            reservation.ResolvedAtUtc = now;
            await ReleaseSlotAsync(reservation, cancellationToken);
        }

        if (stale.Count > 0)
        {
            await database.SaveChangesAsync(cancellationToken);
        }

        return stale.Count;
    }

    private async Task ReleaseSlotAsync(ExportReservation reservation, CancellationToken cancellationToken)
    {
        var period = await database.UsagePeriods
            .FirstOrDefaultAsync(item => item.Id == reservation.UsagePeriodId, cancellationToken);
        if (period is not null && period.ExportsConsumed > 0)
        {
            period.ExportsConsumed--;
        }
    }

    private async Task<UsagePeriod> GetOrCreatePeriodAsync(
        Guid userId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        var periodStart = UsagePeriod.StartOfMonth(now);
        var period = await database.UsagePeriods
            .FirstOrDefaultAsync(
                item => item.UserId == userId && item.PeriodStartUtc == periodStart,
                cancellationToken);
        if (period is not null)
        {
            return period;
        }

        period = new UsagePeriod
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            PeriodStartUtc = periodStart,
            PeriodEndUtc = UsagePeriod.StartOfNextMonth(now),
            ExportsConsumed = 0,
        };
        database.UsagePeriods.Add(period);
        return period;
    }

    private static bool IsUniqueViolation(DbUpdateException exception) =>
        exception.InnerException is Npgsql.PostgresException { SqlState: "23505" };
}
