namespace PromptVideo.Api.Domain;

/// <summary>
/// A subscription tier. Capabilities are not modelled as columns here: they live
/// in <see cref="Entitlements"/> as data so that adding or changing a tier never
/// requires an <c>if (plan == ...)</c> branch in an endpoint.
/// </summary>
public sealed class Plan
{
    public Guid Id { get; set; }

    /// <summary>Stable machine key: <c>free</c>, <c>personal</c>, <c>business</c>.</summary>
    public required string Code { get; set; }

    public required string Name { get; set; }

    /// <summary>List price in VND for the tier's billing period.</summary>
    public decimal PriceVnd { get; set; }

    /// <summary>Number of months a paid subscription runs. Zero for the free tier.</summary>
    public int BillingPeriodMonths { get; set; }

    /// <summary>The tier assigned when a user has no paid subscription.</summary>
    public bool IsDefault { get; set; }

    public ICollection<Entitlement> Entitlements { get; } = [];
}
