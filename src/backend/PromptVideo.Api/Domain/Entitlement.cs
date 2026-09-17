namespace PromptVideo.Api.Domain;

/// <summary>
/// One capability value for a plan, stored as data rather than code.
/// </summary>
public sealed class Entitlement
{
    public Guid Id { get; set; }

    public Guid PlanId { get; set; }

    public Plan? Plan { get; set; }

    /// <summary>One of the constants on <see cref="CapabilityKeys"/>.</summary>
    public required string Key { get; set; }

    /// <summary>
    /// Invariant-culture text. Integers are decimal digits, booleans are
    /// <c>true</c>/<c>false</c>, and <see cref="CapabilityKeys.Unlimited"/> marks
    /// an unbounded numeric capability.
    /// </summary>
    public required string Value { get; set; }
}

public static class CapabilityKeys
{
    /// <summary>Exports allowed per calendar month, or <see cref="Unlimited"/>.</summary>
    public const string ExportsPerMonth = "export.per_month";

    /// <summary>Largest vertical resolution the account may export.</summary>
    public const string MaxExportHeight = "export.max_height";

    /// <summary>Whether exported video must carry a watermark.</summary>
    public const string ExportWatermark = "export.watermark";

    /// <summary>Seats included in the subscription.</summary>
    public const string Seats = "account.seats";

    /// <summary>Sentinel for a numeric capability with no ceiling.</summary>
    public const string Unlimited = "unlimited";
}
