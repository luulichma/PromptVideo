namespace PromptVideo.Api.Modules.Subscriptions;

/// <summary>
/// What an account may do right now. Deliberately short-lived: the client may
/// cache it until <see cref="ExpiresAtUtc"/> but the server re-resolves on every
/// privileged action, so a lapsed subscription cannot be extended by holding an
/// old snapshot.
/// </summary>
public sealed record CapabilitySnapshot(
    string PlanCode,
    string PlanName,
    int MaxExportHeight,
    bool WatermarkRequired,
    int Seats,
    int? ExportsPerMonth,
    int ExportsUsed,
    int? ExportsRemaining,
    DateTimeOffset PeriodStartUtc,
    DateTimeOffset PeriodEndUtc,
    DateTimeOffset ExpiresAtUtc)
{
    /// <summary>True when the plan sets no monthly export ceiling.</summary>
    public bool HasUnlimitedExports => ExportsPerMonth is null;
}
