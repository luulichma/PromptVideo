namespace PromptVideo.Api.Domain;

public enum PaymentEventStatus
{
    Received = 0,
    Applied = 1,
    Rejected = 2,
    Duplicate = 3,
}

/// <summary>
/// A payment notification from a gateway. <see cref="ExternalEventId"/> is unique
/// so a replayed webhook is recorded but never grants entitlement twice.
/// </summary>
public sealed class PaymentEvent
{
    public Guid Id { get; set; }

    /// <summary>Gateway's own event identifier; the idempotency key for billing.</summary>
    public required string ExternalEventId { get; set; }

    public required string Provider { get; set; }

    public Guid UserId { get; set; }

    public required string PlanCode { get; set; }

    public decimal AmountVnd { get; set; }

    public PaymentEventStatus Status { get; set; }

    public DateTimeOffset ReceivedAtUtc { get; set; }

    public DateTimeOffset? AppliedAtUtc { get; set; }

    /// <summary>Why the event was rejected. Never carries gateway payload or card data.</summary>
    public string? FailureReason { get; set; }
}
