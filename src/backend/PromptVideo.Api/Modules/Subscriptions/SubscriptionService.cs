using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Audit;
using PromptVideo.Api.Infrastructure.Persistence;

namespace PromptVideo.Api.Modules.Subscriptions;

public enum PaymentApplyOutcome
{
    Applied,
    Duplicate,
    UnknownPlan,
    AmountMismatch,
}

public sealed record PaymentApplyResult(PaymentApplyOutcome Outcome, Subscription? Subscription);

/// <summary>
/// Turns settled payments into subscriptions. Applying the same gateway event
/// twice is recorded but grants nothing the second time.
/// </summary>
public sealed class SubscriptionService(
    ApplicationDbContext database,
    AuditService audit,
    TimeProvider clock)
{
    public async Task<PaymentApplyResult> ApplyPaymentAsync(
        PaymentNotification notification,
        CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(notification);
        var now = clock.GetUtcNow();

        var alreadySeen = await database.PaymentEvents.AnyAsync(
            item => item.Provider == notification.Provider
                && item.ExternalEventId == notification.ExternalEventId,
            cancellationToken);
        if (alreadySeen)
        {
            return new PaymentApplyResult(PaymentApplyOutcome.Duplicate, null);
        }

        var record = new PaymentEvent
        {
            Id = Guid.NewGuid(),
            Provider = notification.Provider,
            ExternalEventId = notification.ExternalEventId,
            UserId = notification.UserId,
            PlanCode = notification.PlanCode,
            AmountVnd = notification.AmountVnd,
            Status = PaymentEventStatus.Received,
            ReceivedAtUtc = now,
        };
        database.PaymentEvents.Add(record);

        var definition = PlanCatalog.Find(notification.PlanCode);
        if (definition is null || definition.IsDefault)
        {
            record.Status = PaymentEventStatus.Rejected;
            record.FailureReason = "Unknown or non-purchasable plan.";
            audit.Record(AuditActions.PaymentEventRejected, nameof(PaymentEvent), record.Id.ToString(), notification.UserId);
            await SaveAllowingDuplicateAsync(cancellationToken);
            return new PaymentApplyResult(PaymentApplyOutcome.UnknownPlan, null);
        }

        // A gateway that reports the wrong amount must not silently grant access.
        if (notification.AmountVnd != definition.PriceVnd)
        {
            record.Status = PaymentEventStatus.Rejected;
            record.FailureReason = "Amount does not match the plan price.";
            audit.Record(AuditActions.PaymentEventRejected, nameof(PaymentEvent), record.Id.ToString(), notification.UserId);
            await SaveAllowingDuplicateAsync(cancellationToken);
            return new PaymentApplyResult(PaymentApplyOutcome.AmountMismatch, null);
        }

        var plan = await database.Plans.FirstAsync(item => item.Code == definition.Code, cancellationToken);
        var subscription = await GrantAsync(notification.UserId, plan, definition, now, cancellationToken);

        record.Status = PaymentEventStatus.Applied;
        record.AppliedAtUtc = now;
        audit.Record(AuditActions.SubscriptionGranted, nameof(Subscription), subscription.Id.ToString(), notification.UserId);

        try
        {
            await database.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (IsUniqueViolation(exception))
        {
            // A concurrent delivery of the same event won the race.
            database.ChangeTracker.Clear();
            return new PaymentApplyResult(PaymentApplyOutcome.Duplicate, null);
        }

        return new PaymentApplyResult(PaymentApplyOutcome.Applied, subscription);
    }

    /// <summary>
    /// Creates the subscription row. An existing active subscription for the same
    /// plan is extended from its current end date rather than replaced, so paying
    /// twice adds time instead of losing it.
    /// </summary>
    private async Task<Subscription> GrantAsync(
        Guid userId,
        Plan plan,
        PlanDefinition definition,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        var current = await database.Subscriptions
            .Where(item => item.UserId == userId
                && item.PlanId == plan.Id
                && item.Status == SubscriptionStatus.Active)
            .OrderByDescending(item => item.ExpiresAtUtc)
            .FirstOrDefaultAsync(cancellationToken);

        if (current is not null && current.IsActiveAt(now) && current.ExpiresAtUtc is not null)
        {
            current.ExpiresAtUtc = current.ExpiresAtUtc.Value.AddMonths(definition.BillingPeriodMonths);
            return current;
        }

        var subscription = new Subscription
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            PlanId = plan.Id,
            Status = SubscriptionStatus.Active,
            StartsAtUtc = now,
            ExpiresAtUtc = definition.BillingPeriodMonths > 0
                ? now.AddMonths(definition.BillingPeriodMonths)
                : null,
            CreatedAtUtc = now,
        };
        database.Subscriptions.Add(subscription);
        return subscription;
    }

    private async Task SaveAllowingDuplicateAsync(CancellationToken cancellationToken)
    {
        try
        {
            await database.SaveChangesAsync(cancellationToken);
        }
        catch (DbUpdateException exception) when (IsUniqueViolation(exception))
        {
            database.ChangeTracker.Clear();
        }
    }

    private static bool IsUniqueViolation(DbUpdateException exception) =>
        exception.InnerException is Npgsql.PostgresException { SqlState: "23505" };
}
