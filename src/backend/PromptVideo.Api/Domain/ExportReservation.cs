namespace PromptVideo.Api.Domain;

public enum ExportReservationStatus
{
    Reserved = 0,
    Completed = 1,
    Canceled = 2,
}

/// <summary>
/// A held export slot. The browser reserves before encoding, then completes or
/// cancels. The reservation — not the finished file — is what the server knows
/// about, so no project content or media ever reaches the API.
/// </summary>
public sealed class ExportReservation
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    /// <summary>
    /// Caller-supplied key that makes <c>reserve</c> safe to retry. Unique per
    /// user, so a repeated request returns the original reservation instead of
    /// consuming a second slot.
    /// </summary>
    public required string IdempotencyKey { get; set; }

    public Guid UsagePeriodId { get; set; }

    public UsagePeriod? UsagePeriod { get; set; }

    public ExportReservationStatus Status { get; set; }

    /// <summary>Resolution granted by the plan, which may be below what was asked for.</summary>
    public int GrantedHeight { get; set; }

    public bool WatermarkRequired { get; set; }

    public string? PlanCode { get; set; }

    public DateTimeOffset CreatedAtUtc { get; set; }

    public DateTimeOffset? ResolvedAtUtc { get; set; }

    /// <summary>
    /// When an unresolved reservation stops holding its slot, so an abandoned
    /// browser tab cannot strand a quota slot forever.
    /// </summary>
    public DateTimeOffset ExpiresAtUtc { get; set; }

    public bool IsExpiredAt(DateTimeOffset instant) =>
        Status == ExportReservationStatus.Reserved && ExpiresAtUtc <= instant;
}
