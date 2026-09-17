namespace PromptVideo.Api.Domain;

public enum SubscriptionStatus
{
    Active = 0,
    Expired = 1,
    Canceled = 2,
}

/// <summary>
/// Links a user to a paid plan for a bounded period. A user with no active row
/// falls back to the default plan.
/// </summary>
public sealed class Subscription
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    public Guid PlanId { get; set; }

    public Plan? Plan { get; set; }

    public SubscriptionStatus Status { get; set; }

    public DateTimeOffset StartsAtUtc { get; set; }

    /// <summary>Exclusive end of the paid period. Null means it does not expire.</summary>
    public DateTimeOffset? ExpiresAtUtc { get; set; }

    public DateTimeOffset CreatedAtUtc { get; set; }

    /// <summary>
    /// True when the row both is marked active and has not run past its end date.
    /// Expiry is evaluated against the clock on every check so that a lapsed
    /// subscription loses access without waiting for a background sweep.
    /// </summary>
    public bool IsActiveAt(DateTimeOffset instant) =>
        Status == SubscriptionStatus.Active
        && StartsAtUtc <= instant
        && (ExpiresAtUtc is null || ExpiresAtUtc > instant);
}
