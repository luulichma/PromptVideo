using System.Globalization;
using PromptVideo.Api.Domain;

namespace PromptVideo.Api.Modules.Subscriptions;

/// <summary>
/// Projects a plan's entitlement rows into a capability snapshot. Pure and
/// dependency-free on purpose: the plan-to-capability rules are the part worth
/// testing exhaustively, and they should not need a database to exercise.
/// </summary>
public static class PlanCapabilities
{
    public static CapabilitySnapshot Resolve(
        Plan plan,
        int exportsUsed,
        DateTimeOffset now,
        TimeSpan snapshotLifetime)
    {
        ArgumentNullException.ThrowIfNull(plan);

        var quota = PlanCatalog.ReadQuota(Read(plan, CapabilityKeys.ExportsPerMonth));
        var remaining = quota is null ? (int?)null : Math.Max(0, quota.Value - exportsUsed);

        return new CapabilitySnapshot(
            plan.Code,
            plan.Name,
            ReadInt(plan, CapabilityKeys.MaxExportHeight),
            bool.Parse(Read(plan, CapabilityKeys.ExportWatermark)),
            ReadInt(plan, CapabilityKeys.Seats),
            quota,
            exportsUsed,
            remaining,
            UsagePeriod.StartOfMonth(now),
            UsagePeriod.StartOfNextMonth(now),
            now.Add(snapshotLifetime));
    }

    /// <summary>Builds an in-memory plan from a catalog definition, without persistence.</summary>
    public static Plan FromDefinition(PlanDefinition definition)
    {
        ArgumentNullException.ThrowIfNull(definition);

        var plan = new Plan
        {
            Id = Guid.NewGuid(),
            Code = definition.Code,
            Name = definition.Name,
            PriceVnd = definition.PriceVnd,
            BillingPeriodMonths = definition.BillingPeriodMonths,
            IsDefault = definition.IsDefault,
        };

        foreach (var (key, value) in definition.Capabilities)
        {
            plan.Entitlements.Add(new Entitlement { Id = Guid.NewGuid(), PlanId = plan.Id, Key = key, Value = value });
        }

        return plan;
    }

    private static int ReadInt(Plan plan, string key) =>
        int.Parse(Read(plan, key), CultureInfo.InvariantCulture);

    private static string Read(Plan plan, string key)
    {
        var entitlement = plan.Entitlements.FirstOrDefault(item => item.Key == key)
            ?? throw new InvalidOperationException($"Plan '{plan.Code}' is missing the '{key}' entitlement.");
        return entitlement.Value;
    }
}
