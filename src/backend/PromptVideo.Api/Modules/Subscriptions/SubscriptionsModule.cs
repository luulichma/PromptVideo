using System.Security.Claims;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Infrastructure.Security;

namespace PromptVideo.Api.Modules.Subscriptions;

public static class SubscriptionsModule
{
    public static IServiceCollection AddSubscriptionsModule(this IServiceCollection services, IHostEnvironment environment)
    {
        ArgumentNullException.ThrowIfNull(environment);
        services.AddScoped<EntitlementService>();
        services.AddScoped<SubscriptionService>();

        // The simulated gateway is never registered in Production, so there is no
        // configuration mistake that could expose it there.
        if (!environment.IsProduction())
        {
            services.AddScoped<IPaymentGateway, FakePaymentGateway>();
        }

        return services;
    }

    public static IEndpointRouteBuilder MapSubscriptionsModule(this IEndpointRouteBuilder endpoints, IHostEnvironment environment)
    {
        ArgumentNullException.ThrowIfNull(endpoints);
        ArgumentNullException.ThrowIfNull(environment);

        var plans = endpoints.MapGroup("/api/plans").WithTags("Subscriptions");
        plans.MapGet("/", GetPlansAsync).WithName("GetPlans").AllowAnonymous();

        var me = endpoints.MapGroup("/api/me").WithTags("Subscriptions").RequireAuthorization().ProducesAuthFailures();
        me.MapGet("/capabilities", GetCapabilitiesAsync).WithName("GetMyCapabilities");

        if (!environment.IsProduction())
        {
            var payments = endpoints.MapGroup("/api/payments/fake")
                .WithTags("Payments")
                .RequireAuthorization()
                .AddEndpointFilter<AntiforgeryEndpointFilter>()
                .ProducesAuthFailures(includeForbidden: true);
            payments.MapPost("/checkout", FakeCheckoutAsync).WithName("StartFakeCheckout");
        }

        return endpoints;
    }

    private static async Task<Ok<IReadOnlyList<PlanResponse>>> GetPlansAsync(
        ApplicationDbContext database,
        CancellationToken cancellationToken)
    {
        var plans = await database.Plans
            .Include(plan => plan.Entitlements)
            .OrderBy(plan => plan.PriceVnd)
            .ToListAsync(cancellationToken);

        IReadOnlyList<PlanResponse> response = [.. plans.Select(plan => new PlanResponse(
            plan.Code,
            plan.Name,
            plan.PriceVnd,
            plan.BillingPeriodMonths,
            plan.IsDefault,
            plan.Entitlements
                .OrderBy(item => item.Key, StringComparer.Ordinal)
                .Select(item => new CapabilityResponse(item.Key, item.Value))
                .ToList()))];
        return TypedResults.Ok(response);
    }

    private static async Task<Results<Ok<CapabilitySnapshot>, UnauthorizedHttpResult>> GetCapabilitiesAsync(
        ClaimsPrincipal principal,
        EntitlementService entitlements,
        CancellationToken cancellationToken)
    {
        if (!principal.TryGetUserId(out var userId))
        {
            return TypedResults.Unauthorized();
        }

        return TypedResults.Ok(await entitlements.GetSnapshotAsync(userId, cancellationToken));
    }

    private static async Task<Results<Ok<FakeCheckoutResponse>, UnauthorizedHttpResult, ProblemHttpResult, Conflict<FakeCheckoutResponse>>> FakeCheckoutAsync(
        FakeCheckoutRequest request,
        ClaimsPrincipal principal,
        IPaymentGateway gateway,
        SubscriptionService subscriptions,
        IHostEnvironment environment,
        CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);
        if (!principal.TryGetUserId(out var userId))
        {
            return TypedResults.Unauthorized();
        }

        // Outside local development the simulated gateway is an administrative
        // tool, not something an ordinary account may call.
        var developmentLike = environment.IsDevelopment() || environment.IsEnvironment("Testing");
        if (!developmentLike && !principal.IsInRole(Roles.Admin))
        {
            return TypedResults.Problem(
                statusCode: StatusCodes.Status403Forbidden,
                title: "The simulated payment gateway requires an administrator outside development.");
        }

        if (PlanCatalog.Find(request.PlanCode) is null)
        {
            return TypedResults.Problem(statusCode: StatusCodes.Status400BadRequest, title: "Unknown plan code.");
        }

        var notification = await gateway.CheckoutAsync(userId, request.PlanCode, cancellationToken);
        var result = await subscriptions.ApplyPaymentAsync(notification, cancellationToken);

        var response = new FakeCheckoutResponse(
            result.Outcome.ToString(),
            gateway.DisplayLabel,
            notification.ExternalEventId,
            result.Subscription?.ExpiresAtUtc);

        return result.Outcome switch
        {
            PaymentApplyOutcome.Applied => TypedResults.Ok(response),
            PaymentApplyOutcome.Duplicate => TypedResults.Conflict(response),
            _ => TypedResults.Problem(statusCode: StatusCodes.Status400BadRequest, title: result.Outcome.ToString()),
        };
    }
}

public sealed record PlanResponse(
    string Code,
    string Name,
    decimal PriceVnd,
    int BillingPeriodMonths,
    bool IsDefault,
    IReadOnlyList<CapabilityResponse> Capabilities);

public sealed record CapabilityResponse(string Key, string Value);

public sealed record FakeCheckoutRequest(string PlanCode);

public sealed record FakeCheckoutResponse(
    string Outcome,
    string GatewayLabel,
    string ExternalEventId,
    DateTimeOffset? SubscriptionExpiresAtUtc);
