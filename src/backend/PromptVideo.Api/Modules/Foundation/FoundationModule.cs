using System.Reflection;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using PromptVideo.Api.Infrastructure.Security;

namespace PromptVideo.Api.Modules.Foundation;

public static class FoundationModule
{
    public static IEndpointRouteBuilder MapFoundationModule(this IEndpointRouteBuilder endpoints)
    {
        var group = endpoints.MapGroup("/api/foundation").WithTags("Foundation");
        group.MapGet("/status", GetStatus).WithName("GetFoundationStatus");
        group.MapGet("/health", GetHealthAsync).WithName("GetFoundationHealth");
        group.MapGet("/private", () => Results.NoContent())
            .RequireAuthorization()
            .ProducesAuthFailures()
            .WithName("GetPrivateFoundationStatus");
        group.MapPost("/csrf-check", () => Results.NoContent())
            .AddEndpointFilter<AntiforgeryEndpointFilter>()
            .WithName("CheckAntiforgeryToken");

        endpoints.MapGet("/api/security/csrf", GetAntiforgeryToken)
            .WithTags("Security")
            .WithName("GetAntiforgeryToken");
        return endpoints;
    }

    private static FoundationStatusResponse GetStatus(IHostEnvironment environment) => new(
        "ok",
        Assembly.GetExecutingAssembly().GetName().Version?.ToString() ?? "unknown",
        environment.EnvironmentName,
        DateTimeOffset.UtcNow);

    /// <summary>
    /// Reports readiness to the browser client. Only check names and states are
    /// returned; descriptions and exceptions stay server-side so connection
    /// strings and other secrets never reach a response body.
    /// </summary>
    private static async Task<Results<Ok<FoundationHealthResponse>, JsonHttpResult<FoundationHealthResponse>>> GetHealthAsync(
        HealthCheckService healthChecks,
        CancellationToken cancellationToken)
    {
        var report = await healthChecks.CheckHealthAsync(
            registration => registration.Tags.Contains("ready"),
            cancellationToken);
        var response = new FoundationHealthResponse(
            report.Status.ToString(),
            [.. report.Entries.Select(entry => new FoundationHealthCheck(entry.Key, entry.Value.Status.ToString()))]);

        return report.Status == HealthStatus.Unhealthy
            ? TypedResults.Json(response, statusCode: StatusCodes.Status503ServiceUnavailable)
            : TypedResults.Ok(response);
    }

    private static AntiforgeryTokenResponse GetAntiforgeryToken(HttpContext context, IAntiforgery antiforgery)
    {
        var tokens = antiforgery.GetAndStoreTokens(context);
        return new AntiforgeryTokenResponse(tokens.RequestToken!, AntiforgeryEndpointFilter.HeaderName);
    }
}

public sealed record FoundationStatusResponse(
    string Status,
    string Version,
    string Environment,
    DateTimeOffset ServerTimeUtc);

public sealed record AntiforgeryTokenResponse(string Token, string HeaderName);

public sealed record FoundationHealthResponse(
    string Status,
    IReadOnlyList<FoundationHealthCheck> Checks);

public sealed record FoundationHealthCheck(string Name, string Status);
