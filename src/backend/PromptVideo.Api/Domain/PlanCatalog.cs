using System.Globalization;

namespace PromptVideo.Api.Domain;

/// <summary>
/// The canonical definition of the three MVP tiers, expressed as capability data.
/// Endpoints resolve capabilities through <c>EntitlementService</c>; they never
/// branch on a plan code, so a pricing change is a data change.
/// </summary>
public static class PlanCatalog
{
    public const string FreeCode = "free";
    public const string PersonalCode = "personal";
    public const string BusinessCode = "business";

    public static IReadOnlyList<PlanDefinition> All { get; } =
    [
        new(
            FreeCode,
            "Miễn phí",
            PriceVnd: 0m,
            BillingPeriodMonths: 0,
            IsDefault: true,
            Capabilities: new Dictionary<string, string>(StringComparer.Ordinal)
            {
                [CapabilityKeys.ExportsPerMonth] = "3",
                [CapabilityKeys.MaxExportHeight] = "720",
                [CapabilityKeys.ExportWatermark] = "true",
                [CapabilityKeys.Seats] = "1",
            }),
        new(
            PersonalCode,
            "Cá nhân",
            PriceVnd: 599_000m,
            BillingPeriodMonths: 12,
            IsDefault: false,
            Capabilities: new Dictionary<string, string>(StringComparer.Ordinal)
            {
                [CapabilityKeys.ExportsPerMonth] = CapabilityKeys.Unlimited,
                [CapabilityKeys.MaxExportHeight] = "1080",
                [CapabilityKeys.ExportWatermark] = "false",
                [CapabilityKeys.Seats] = "1",
            }),
        new(
            BusinessCode,
            "Doanh nghiệp",
            PriceVnd: 4_900_000m,
            BillingPeriodMonths: 12,
            IsDefault: false,
            Capabilities: new Dictionary<string, string>(StringComparer.Ordinal)
            {
                [CapabilityKeys.ExportsPerMonth] = CapabilityKeys.Unlimited,
                [CapabilityKeys.MaxExportHeight] = "1080",
                [CapabilityKeys.ExportWatermark] = "false",
                [CapabilityKeys.Seats] = "5",
            }),
    ];

    public static PlanDefinition Default { get; } = All.Single(plan => plan.IsDefault);

    public static PlanDefinition? Find(string? code) =>
        All.FirstOrDefault(plan => string.Equals(plan.Code, code, StringComparison.OrdinalIgnoreCase));

    /// <summary>Parses a capability value that may carry the unlimited sentinel.</summary>
    public static int? ReadQuota(string value) =>
        string.Equals(value, CapabilityKeys.Unlimited, StringComparison.OrdinalIgnoreCase)
            ? null
            : int.Parse(value, CultureInfo.InvariantCulture);
}

public sealed record PlanDefinition(
    string Code,
    string Name,
    decimal PriceVnd,
    int BillingPeriodMonths,
    bool IsDefault,
    IReadOnlyDictionary<string, string> Capabilities);
