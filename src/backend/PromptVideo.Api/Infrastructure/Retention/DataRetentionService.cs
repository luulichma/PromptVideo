using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Modules.Exports;

namespace PromptVideo.Api.Infrastructure.Retention;

public sealed class RetentionOptions
{
    /// <summary>How long audit rows are kept before the sweep deletes them.</summary>
    public TimeSpan AuditRetention { get; set; } = TimeSpan.FromDays(180);

    /// <summary>How long resolved reservations are kept for support and metrics.</summary>
    public TimeSpan ReservationRetention { get; set; } = TimeSpan.FromDays(90);

    public TimeSpan SweepInterval { get; set; } = TimeSpan.FromHours(6);

    /// <summary>Off by default so tests and local runs do not delete data unexpectedly.</summary>
    public bool Enabled { get; set; }
}

/// <summary>
/// Periodically releases abandoned reservations and deletes operational rows past
/// their retention window. It only ever removes server-side operational data;
/// user content never reaches this service because it never reaches the server.
/// </summary>
public sealed partial class DataRetentionService(
    IServiceScopeFactory scopeFactory,
    TimeProvider clock,
    IOptions<RetentionOptions> options,
    ILogger<DataRetentionService> logger) : BackgroundService
{
    [LoggerMessage(Level = LogLevel.Information, Message = "Data retention sweep is disabled.")]
    private partial void LogSweepDisabled();

    [LoggerMessage(
        Level = LogLevel.Information,
        Message = "Retention sweep released {Released} reservations, deleted {Reservations} reservations and {Audits} audit rows.")]
    private partial void LogSweepCompleted(int released, int reservations, int audits);

    [LoggerMessage(Level = LogLevel.Error, Message = "Retention sweep failed.")]
    private partial void LogSweepFailed(Exception exception);

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        if (!options.Value.Enabled)
        {
            LogSweepDisabled();
            return;
        }

        using var timer = new PeriodicTimer(options.Value.SweepInterval, clock);
        do
        {
            try
            {
                var summary = await SweepAsync(stoppingToken);
                LogSweepCompleted(
                    summary.ReleasedReservations,
                    summary.DeletedReservations,
                    summary.DeletedAuditEvents);
            }
            catch (OperationCanceledException) when (stoppingToken.IsCancellationRequested)
            {
                break;
            }
#pragma warning disable CA1031 // A sweep failure must not stop the host.
            catch (Exception exception)
            {
                LogSweepFailed(exception);
            }
#pragma warning restore CA1031
        }
        while (await timer.WaitForNextTickAsync(stoppingToken));
    }

    public async Task<RetentionSummary> SweepAsync(CancellationToken cancellationToken)
    {
        await using var scope = scopeFactory.CreateAsyncScope();
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var reservations = scope.ServiceProvider.GetRequiredService<ExportReservationService>();
        var now = clock.GetUtcNow();

        var released = await reservations.ReleaseExpiredAsync(null, now, cancellationToken);

        var reservationCutoff = now - options.Value.ReservationRetention;
        var deletedReservations = await database.ExportReservations
            .Where(reservation =>
                reservation.Status != ExportReservationStatus.Reserved
                && reservation.ResolvedAtUtc != null
                && reservation.ResolvedAtUtc < reservationCutoff)
            .ExecuteDeleteAsync(cancellationToken);

        var auditCutoff = now - options.Value.AuditRetention;
        var deletedAudits = await database.AuditEvents
            .Where(audit => audit.OccurredAtUtc < auditCutoff)
            .ExecuteDeleteAsync(cancellationToken);

        return new RetentionSummary(released, deletedReservations, deletedAudits);
    }
}

public sealed record RetentionSummary(int ReleasedReservations, int DeletedReservations, int DeletedAuditEvents);
