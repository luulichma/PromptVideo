using PromptVideo.Api.Domain;
using PromptVideo.Api.Modules.Subscriptions;

namespace PromptVideo.Api.Tests;

/// <summary>
/// The capability table for the three MVP tiers. These are pure unit tests: no
/// database, no host, no clock drift — just the plan-to-capability rules.
/// </summary>
public sealed class PlanPolicyTests
{
    private static readonly DateTimeOffset Now = new(2026, 3, 15, 10, 0, 0, TimeSpan.Zero);

    [Theory]
    // plan code, max height, watermark, exports per month (null = unlimited), seats
    [InlineData(PlanCatalog.FreeCode, 720, true, 3, 1)]
    [InlineData(PlanCatalog.PersonalCode, 1080, false, null, 1)]
    [InlineData(PlanCatalog.BusinessCode, 1080, false, null, 5)]
    public void EachPlanExposesItsDocumentedCapabilities(
        string planCode,
        int expectedHeight,
        bool expectedWatermark,
        int? expectedQuota,
        int expectedSeats)
    {
        var snapshot = Resolve(planCode, exportsUsed: 0);

        Assert.Equal(expectedHeight, snapshot.MaxExportHeight);
        Assert.Equal(expectedWatermark, snapshot.WatermarkRequired);
        Assert.Equal(expectedQuota, snapshot.ExportsPerMonth);
        Assert.Equal(expectedSeats, snapshot.Seats);
    }

    [Theory]
    [InlineData(PlanCatalog.FreeCode, 0, 3)]
    [InlineData(PlanCatalog.FreeCode, 2, 1)]
    [InlineData(PlanCatalog.FreeCode, 3, 0)]
    // Consumption beyond the quota must clamp at zero rather than go negative.
    [InlineData(PlanCatalog.FreeCode, 5, 0)]
    public void MeteredPlanReportsRemainingExports(string planCode, int used, int expectedRemaining)
    {
        var snapshot = Resolve(planCode, used);

        Assert.False(snapshot.HasUnlimitedExports);
        Assert.Equal(expectedRemaining, snapshot.ExportsRemaining);
    }

    [Theory]
    [InlineData(PlanCatalog.PersonalCode)]
    [InlineData(PlanCatalog.BusinessCode)]
    public void UnlimitedPlansNeverReportARemainingCount(string planCode)
    {
        var snapshot = Resolve(planCode, exportsUsed: 500);

        Assert.True(snapshot.HasUnlimitedExports);
        Assert.Null(snapshot.ExportsRemaining);
        Assert.Null(snapshot.ExportsPerMonth);
    }

    [Fact]
    public void OnlyTheFreePlanIsTheDefault()
    {
        Assert.Equal(PlanCatalog.FreeCode, PlanCatalog.Default.Code);
        Assert.Single(PlanCatalog.All, plan => plan.IsDefault);
    }

    [Fact]
    public void SnapshotCarriesAShortLifetimeAndTheCurrentPeriod()
    {
        var snapshot = PlanCapabilities.Resolve(
            PlanCapabilities.FromDefinition(PlanCatalog.Default),
            exportsUsed: 0,
            Now,
            TimeSpan.FromSeconds(60));

        Assert.Equal(Now.AddSeconds(60), snapshot.ExpiresAtUtc);
        Assert.Equal(new DateTimeOffset(2026, 3, 1, 0, 0, 0, TimeSpan.Zero), snapshot.PeriodStartUtc);
        Assert.Equal(new DateTimeOffset(2026, 4, 1, 0, 0, 0, TimeSpan.Zero), snapshot.PeriodEndUtc);
    }

    [Fact]
    public void EveryPlanDefinesEveryCapability()
    {
        string[] required =
        [
            CapabilityKeys.ExportsPerMonth,
            CapabilityKeys.MaxExportHeight,
            CapabilityKeys.ExportWatermark,
            CapabilityKeys.Seats,
        ];

        foreach (var definition in PlanCatalog.All)
        {
            foreach (var key in required)
            {
                Assert.True(
                    definition.Capabilities.ContainsKey(key),
                    $"Plan '{definition.Code}' is missing capability '{key}'.");
            }
        }
    }

    [Fact]
    public void AMissingCapabilityFailsLoudlyRatherThanDefaultingSilently()
    {
        var plan = PlanCapabilities.FromDefinition(PlanCatalog.Default);
        var watermark = plan.Entitlements.Single(item => item.Key == CapabilityKeys.ExportWatermark);
        plan.Entitlements.Remove(watermark);

        Assert.Throws<InvalidOperationException>(
            () => PlanCapabilities.Resolve(plan, 0, Now, TimeSpan.FromSeconds(60)));
    }

    private static CapabilitySnapshot Resolve(string planCode, int exportsUsed) =>
        PlanCapabilities.Resolve(
            PlanCapabilities.FromDefinition(PlanCatalog.Find(planCode)!),
            exportsUsed,
            Now,
            TimeSpan.FromSeconds(60));
}

/// <summary>Month-boundary arithmetic, which drives the free-tier quota reset.</summary>
public sealed class UsagePeriodTests
{
    [Theory]
    [InlineData("2026-01-31T23:59:59Z", "2026-01-01T00:00:00Z", "2026-02-01T00:00:00Z")]
    [InlineData("2026-02-01T00:00:00Z", "2026-02-01T00:00:00Z", "2026-03-01T00:00:00Z")]
    // December must roll the year over, not just the month.
    [InlineData("2026-12-31T23:59:59Z", "2026-12-01T00:00:00Z", "2027-01-01T00:00:00Z")]
    // A leap-year February still ends on the first of March.
    [InlineData("2028-02-29T12:00:00Z", "2028-02-01T00:00:00Z", "2028-03-01T00:00:00Z")]
    public void PeriodBoundariesFollowTheUtcCalendarMonth(string instant, string expectedStart, string expectedEnd)
    {
        var moment = DateTimeOffset.Parse(instant, System.Globalization.CultureInfo.InvariantCulture);

        Assert.Equal(DateTimeOffset.Parse(expectedStart, System.Globalization.CultureInfo.InvariantCulture), UsagePeriod.StartOfMonth(moment));
        Assert.Equal(DateTimeOffset.Parse(expectedEnd, System.Globalization.CultureInfo.InvariantCulture), UsagePeriod.StartOfNextMonth(moment));
    }

    [Fact]
    public void LocalOffsetsAreNormalisedToUtcBeforeBucketing()
    {
        // 2026-03-01T06:00+07:00 is still February in UTC, so it belongs to the
        // February period. Bucketing on local time would leak a free export.
        var localInstant = new DateTimeOffset(2026, 3, 1, 6, 0, 0, TimeSpan.FromHours(7));

        Assert.Equal(
            new DateTimeOffset(2026, 2, 1, 0, 0, 0, TimeSpan.Zero),
            UsagePeriod.StartOfMonth(localInstant));
    }
}
