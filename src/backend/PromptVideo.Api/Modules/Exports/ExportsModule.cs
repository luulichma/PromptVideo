using System.Security.Claims;
using Microsoft.AspNetCore.Http.HttpResults;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Security;
using PromptVideo.Api.Modules.Subscriptions;

namespace PromptVideo.Api.Modules.Exports;

public static class ExportsModule
{
    public static IServiceCollection AddExportsModule(this IServiceCollection services)
    {
        services.AddScoped<ExportReservationService>();
        return services;
    }

    public static IEndpointRouteBuilder MapExportsModule(this IEndpointRouteBuilder endpoints)
    {
        ArgumentNullException.ThrowIfNull(endpoints);

        var group = endpoints.MapGroup("/api/exports/reservations")
            .WithTags("Exports")
            .RequireAuthorization()
            .AddEndpointFilter<AntiforgeryEndpointFilter>();

        group.MapPost("/", ReserveAsync).WithName("ReserveExport");
        group.MapPost("/{reservationId:guid}/complete", CompleteAsync).WithName("CompleteExport");
        group.MapPost("/{reservationId:guid}/cancel", CancelAsync).WithName("CancelExport");
        return endpoints;
    }

    private static async Task<Results<Ok<ExportReservationResponse>, UnauthorizedHttpResult, ProblemHttpResult>> ReserveAsync(
        ReserveExportRequest request,
        ClaimsPrincipal principal,
        ExportReservationService reservations,
        CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        if (!principal.TryGetUserId(out var userId))
        {
            return TypedResults.Unauthorized();
        }

        if (string.IsNullOrWhiteSpace(request.IdempotencyKey) || request.IdempotencyKey.Length > 128)
        {
            return TypedResults.Problem(
                statusCode: StatusCodes.Status400BadRequest,
                title: "An idempotency key of 1-128 characters is required.");
        }

        var result = await reservations.ReserveAsync(
            userId,
            request.IdempotencyKey,
            request.RequestedHeight,
            cancellationToken);

        return result.Outcome switch
        {
            ReserveOutcome.Reserved or ReserveOutcome.AlreadyReserved =>
                TypedResults.Ok(ToResponse(result.Reservation!, result.Capabilities!)),
            ReserveOutcome.QuotaExceeded => TypedResults.Problem(
                statusCode: StatusCodes.Status403Forbidden,
                title: "Monthly export quota reached.",
                detail: $"The {result.Capabilities!.PlanName} plan allows {result.Capabilities.ExportsPerMonth} exports per month."),
            _ => TypedResults.Problem(
                statusCode: StatusCodes.Status400BadRequest,
                title: "Unsupported export height."),
        };
    }

    private static async Task<Results<Ok<ExportReservationResponse>, UnauthorizedHttpResult, NotFound, ProblemHttpResult>> CompleteAsync(
        Guid reservationId,
        ClaimsPrincipal principal,
        ExportReservationService reservations,
        CancellationToken cancellationToken) =>
        await ResolveAsync(
            principal,
            (userId, token) => reservations.CompleteAsync(userId, reservationId, token),
            cancellationToken);

    private static async Task<Results<Ok<ExportReservationResponse>, UnauthorizedHttpResult, NotFound, ProblemHttpResult>> CancelAsync(
        Guid reservationId,
        ClaimsPrincipal principal,
        ExportReservationService reservations,
        CancellationToken cancellationToken) =>
        await ResolveAsync(
            principal,
            (userId, token) => reservations.CancelAsync(userId, reservationId, token),
            cancellationToken);

    private static async Task<Results<Ok<ExportReservationResponse>, UnauthorizedHttpResult, NotFound, ProblemHttpResult>> ResolveAsync(
        ClaimsPrincipal principal,
        Func<Guid, CancellationToken, Task<ResolveResult>> operation,
        CancellationToken cancellationToken)
    {
        if (!principal.TryGetUserId(out var userId))
        {
            return TypedResults.Unauthorized();
        }

        var result = await operation(userId, cancellationToken);
        return result.Outcome switch
        {
            ResolveOutcome.Resolved or ResolveOutcome.AlreadyResolved =>
                TypedResults.Ok(ToResponse(result.Reservation!, null)),
            ResolveOutcome.NotFound => TypedResults.NotFound(),
            ResolveOutcome.Expired => TypedResults.Problem(
                statusCode: StatusCodes.Status409Conflict,
                title: "The reservation expired before it was completed."),
            _ => TypedResults.Problem(
                statusCode: StatusCodes.Status409Conflict,
                title: "The reservation was already resolved in a different way."),
        };
    }

    private static ExportReservationResponse ToResponse(ExportReservation reservation, CapabilitySnapshot? capabilities) =>
        new(
            reservation.Id,
            reservation.Status.ToString(),
            reservation.GrantedHeight,
            reservation.WatermarkRequired,
            reservation.ExpiresAtUtc,
            capabilities?.ExportsRemaining,
            capabilities?.ExportsPerMonth);
}

public sealed record ReserveExportRequest(string IdempotencyKey, int RequestedHeight);

public sealed record ExportReservationResponse(
    Guid ReservationId,
    string Status,
    int GrantedHeight,
    bool WatermarkRequired,
    DateTimeOffset ExpiresAtUtc,
    int? ExportsRemaining,
    int? ExportsPerMonth);
