using System.Security.Claims;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Audit;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Infrastructure.Security;
using PromptVideo.Api.Modules.Templates;

namespace PromptVideo.Api.Modules.Admin;

public static class AdminModule
{
    public static IEndpointRouteBuilder MapAdminModule(this IEndpointRouteBuilder endpoints)
    {
        ArgumentNullException.ThrowIfNull(endpoints);

        var group = endpoints.MapGroup("/api/admin")
            .WithTags("Admin")
            .RequireAuthorization(Roles.AdminPolicy);

        group.MapGet("/templates", GetAllTemplatesAsync).WithName("GetAdminTemplates");
        group.MapPost("/templates/{templateKey}/status", SetTemplateStatusAsync)
            .WithName("SetTemplateStatus")
            .AddEndpointFilter<AntiforgeryEndpointFilter>();
        group.MapGet("/metrics", GetMetricsAsync).WithName("GetAdminMetrics");
        return endpoints;
    }

    private static async Task<Ok<IReadOnlyList<TemplateResponse>>> GetAllTemplatesAsync(
        ApplicationDbContext database,
        CancellationToken cancellationToken)
    {
        var templates = await database.TemplateCatalogEntries
            .AsNoTracking()
            .OrderBy(entry => entry.TemplateKey)
            .ToListAsync(cancellationToken);

        IReadOnlyList<TemplateResponse> response = [.. templates.Select(TemplatesModule.ToResponse)];
        return TypedResults.Ok(response);
    }

    private static async Task<Results<Ok<TemplateResponse>, NotFound, ProblemHttpResult>> SetTemplateStatusAsync(
        string templateKey,
        SetTemplateStatusRequest request,
        ClaimsPrincipal principal,
        ApplicationDbContext database,
        AuditService audit,
        TimeProvider clock,
        CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        if (!Enum.TryParse<TemplateStatus>(request.Status, ignoreCase: true, out var status))
        {
            return TypedResults.Problem(
                statusCode: StatusCodes.Status400BadRequest,
                title: "Status must be Draft, Active, or Retired.");
        }

        var entry = await database.TemplateCatalogEntries
            .FirstOrDefaultAsync(item => item.TemplateKey == templateKey, cancellationToken);
        if (entry is null)
        {
            return TypedResults.NotFound();
        }

        entry.Status = status;
        entry.UpdatedAtUtc = clock.GetUtcNow();
        principal.TryGetUserId(out var actorId);
        audit.Record(AuditActions.TemplateStatusChanged, nameof(TemplateCatalogEntry), entry.TemplateKey, actorId);
        await database.SaveChangesAsync(cancellationToken);

        return TypedResults.Ok(TemplatesModule.ToResponse(entry));
    }

    /// <summary>
    /// Aggregate operational numbers only. Every value is a count or a timestamp;
    /// nothing here can carry project content, media, or tokens.
    /// </summary>
    private static async Task<Ok<AdminMetricsResponse>> GetMetricsAsync(
        ApplicationDbContext database,
        TimeProvider clock,
        CancellationToken cancellationToken)
    {
        var now = clock.GetUtcNow();
        var periodStart = UsagePeriod.StartOfMonth(now);

        var reservationCounts = await database.ExportReservations
            .GroupBy(reservation => reservation.Status)
            .Select(group => new { Status = group.Key, Count = group.Count() })
            .ToListAsync(cancellationToken);

        var planCounts = await database.Subscriptions
            .Where(subscription => subscription.Status == SubscriptionStatus.Active)
            .Join(database.Plans, subscription => subscription.PlanId, plan => plan.Id, (subscription, plan) => plan.Code)
            .GroupBy(code => code)
            .Select(group => new { PlanCode = group.Key, Count = group.Count() })
            .ToListAsync(cancellationToken);

        return TypedResults.Ok(new AdminMetricsResponse(
            now,
            await database.Users.CountAsync(cancellationToken),
            reservationCounts.Sum(item => item.Count),
            reservationCounts.FirstOrDefault(item => item.Status == ExportReservationStatus.Completed)?.Count ?? 0,
            reservationCounts.FirstOrDefault(item => item.Status == ExportReservationStatus.Reserved)?.Count ?? 0,
            reservationCounts.FirstOrDefault(item => item.Status == ExportReservationStatus.Canceled)?.Count ?? 0,
            await database.UsagePeriods
                .Where(period => period.PeriodStartUtc == periodStart)
                .SumAsync(period => (int?)period.ExportsConsumed, cancellationToken) ?? 0,
            await database.TemplateCatalogEntries.CountAsync(entry => entry.Status == TemplateStatus.Active, cancellationToken),
            [.. planCounts.Select(item => new PlanSubscriberCount(item.PlanCode, item.Count))]));
    }
}

public sealed record SetTemplateStatusRequest(string Status);

public sealed record AdminMetricsResponse(
    DateTimeOffset GeneratedAtUtc,
    int UserCount,
    int ReservationsTotal,
    int ReservationsCompleted,
    int ReservationsOutstanding,
    int ReservationsCanceled,
    int ExportsConsumedThisPeriod,
    int ActiveTemplateCount,
    IReadOnlyList<PlanSubscriberCount> ActiveSubscriptionsByPlan);

public sealed record PlanSubscriberCount(string PlanCode, int Count);
