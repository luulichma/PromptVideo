using Microsoft.AspNetCore.Http;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Logging;
using PromptVideo.Api.Infrastructure.Persistence;

namespace PromptVideo.Api.Infrastructure.Audit;

/// <summary>
/// Records business events. Callers pass identifiers only; there is deliberately
/// no parameter for a free-form payload, so content cannot leak into the audit
/// trail by accident.
/// </summary>
public sealed class AuditService(
    ApplicationDbContext database,
    TimeProvider clock,
    IHttpContextAccessor httpContextAccessor)
{
    /// <summary>
    /// Adds an audit row to the current change tracker. The caller decides when
    /// to save, so an audit entry commits in the same transaction as the change
    /// it describes and cannot survive a rolled-back operation.
    /// </summary>
    public void Record(string action, string subjectType, string? subjectId, Guid? actorUserId)
    {
        database.AuditEvents.Add(new AuditEvent
        {
            Id = Guid.NewGuid(),
            OccurredAtUtc = clock.GetUtcNow(),
            ActorUserId = actorUserId,
            Action = action,
            SubjectType = subjectType,
            SubjectId = subjectId,
            CorrelationId = CurrentCorrelationId(),
        });
    }

    private string? CurrentCorrelationId() =>
        httpContextAccessor.HttpContext?.Response.Headers[CorrelationIdMiddleware.HeaderName].FirstOrDefault();
}
