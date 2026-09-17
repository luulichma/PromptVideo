namespace PromptVideo.Api.Domain;

/// <summary>
/// A business-level audit record. Per docs/logging-policy.md it carries actors,
/// actions, and stable identifiers only — never project JSON, image filenames,
/// media bytes, tokens, or credentials.
/// </summary>
public sealed class AuditEvent
{
    public Guid Id { get; set; }

    public DateTimeOffset OccurredAtUtc { get; set; }

    /// <summary>Null for system-initiated actions such as the retention sweep.</summary>
    public Guid? ActorUserId { get; set; }

    /// <summary>One of the constants on <see cref="AuditActions"/>.</summary>
    public required string Action { get; set; }

    public required string SubjectType { get; set; }

    public string? SubjectId { get; set; }

    public string? CorrelationId { get; set; }
}

public static class AuditActions
{
    public const string SubscriptionGranted = "subscription.granted";
    public const string PaymentEventRejected = "payment.rejected";
    public const string PaymentEventDuplicated = "payment.duplicate";
    public const string ExportReserved = "export.reserved";
    public const string ExportCompleted = "export.completed";
    public const string ExportCanceled = "export.canceled";
    public const string ExportQuotaExceeded = "export.quota_exceeded";
    public const string TemplateStatusChanged = "template.status_changed";
    public const string RetentionSweep = "retention.sweep";
}
