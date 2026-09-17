using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Persistence;

namespace PromptVideo.Api.Modules.Subscriptions;

public sealed class EntitlementOptions
{
    /// <summary>
    /// How long a capability snapshot may be treated as fresh by a client. Kept
    /// short so that losing a subscription takes effect almost immediately.
    /// </summary>
    public TimeSpan SnapshotLifetime { get; set; } = TimeSpan.FromSeconds(60);
}

/// <summary>
/// Resolves the plan in force for a user and projects it into a
/// <see cref="CapabilitySnapshot"/>. This is the only place that decides which
/// plan applies, which keeps plan logic out of endpoints.
/// </summary>
public sealed class EntitlementService(
    ApplicationDbContext database,
    TimeProvider clock,
    Microsoft.Extensions.Options.IOptions<EntitlementOptions> options)
{
    public async Task<CapabilitySnapshot> GetSnapshotAsync(Guid userId, CancellationToken cancellationToken = default)
    {
        var now = clock.GetUtcNow();
        var plan = await ResolvePlanAsync(userId, now, cancellationToken);
        var periodStart = UsagePeriod.StartOfMonth(now);
        var used = await database.UsagePeriods
            .Where(period => period.UserId == userId && period.PeriodStartUtc == periodStart)
            .Select(period => (int?)period.ExportsConsumed)
            .FirstOrDefaultAsync(cancellationToken) ?? 0;

        return BuildSnapshot(plan, used, now);
    }

    /// <summary>
    /// The plan whose capabilities apply at <paramref name="instant"/>: the most
    /// recently started active subscription, or the default plan when none is in
    /// force. Expiry is evaluated here rather than by a sweep job.
    /// </summary>
    public async Task<Plan> ResolvePlanAsync(
        Guid userId,
        DateTimeOffset instant,
        CancellationToken cancellationToken = default)
    {
        var candidates = await database.Subscriptions
            .Include(subscription => subscription.Plan!)
            .ThenInclude(plan => plan.Entitlements)
            .Where(subscription =>
                subscription.UserId == userId
                && subscription.Status == SubscriptionStatus.Active
                && subscription.StartsAtUtc <= instant)
            .OrderByDescending(subscription => subscription.StartsAtUtc)
            .ToListAsync(cancellationToken);

        var active = candidates.FirstOrDefault(subscription => subscription.IsActiveAt(instant));
        if (active?.Plan is not null)
        {
            return active.Plan;
        }

        return await database.Plans
            .Include(plan => plan.Entitlements)
            .FirstAsync(plan => plan.IsDefault, cancellationToken);
    }

    public CapabilitySnapshot BuildSnapshot(Plan plan, int exportsUsed, DateTimeOffset now) =>
        PlanCapabilities.Resolve(plan, exportsUsed, now, options.Value.SnapshotLifetime);
}
