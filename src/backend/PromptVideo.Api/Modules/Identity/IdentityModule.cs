using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.RateLimiting;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Infrastructure.Security;

namespace PromptVideo.Api.Modules.Identity;

public static class IdentityModule
{
    public static IServiceCollection AddIdentityModule(this IServiceCollection services)
    {
        // AddIdentityApiEndpoints makes the bearer scheme the default, which would
        // make every RequireAuthorization endpoint reject the cookie session this
        // application actually uses. Accept both, with the cookie first.
        string[] schemes = [IdentityConstants.ApplicationScheme, IdentityConstants.BearerScheme];
        services.AddAuthorizationBuilder()
            .SetDefaultPolicy(new AuthorizationPolicyBuilder(schemes)
                .RequireAuthenticatedUser()
                .Build())
            .AddPolicy(Roles.AdminPolicy, policy => policy
                .AddAuthenticationSchemes(schemes)
                .RequireAuthenticatedUser()
                .RequireRole(Roles.Admin));

        services.AddIdentityApiEndpoints<ApplicationUser>(options =>
        {
            options.Password.RequiredLength = 10;
            options.Password.RequireNonAlphanumeric = false;
            options.SignIn.RequireConfirmedEmail = false;
            options.User.RequireUniqueEmail = true;

            // Lockout is the second layer behind the rate limiter: the limiter
            // slows an attacker down per client, lockout stops the attempt from
            // succeeding against one account no matter where it comes from.
            options.Lockout.AllowedForNewUsers = true;
            options.Lockout.MaxFailedAccessAttempts = 5;
            options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(15);
        }).AddRoles<IdentityRole<Guid>>()
          .AddEntityFrameworkStores<ApplicationDbContext>();

        services.ConfigureApplicationCookie(options =>
        {
            options.Cookie.Name = "PromptVideo.Auth";
            options.Cookie.HttpOnly = true;
            options.Cookie.SameSite = SameSiteMode.Lax;
            options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
            options.SlidingExpiration = true;
        });
        return services;
    }

    public static IEndpointRouteBuilder MapIdentityModule(this IEndpointRouteBuilder endpoints)
    {
        ArgumentNullException.ThrowIfNull(endpoints);

        var group = endpoints.MapGroup("/api/auth")
            .WithTags("Identity")
            .AddEndpointFilter<AntiforgeryEndpointFilter>()
            .RequireRateLimiting(RateLimitPolicies.Authentication);
        group.MapIdentityApi<ApplicationUser>();

        // MapIdentityApi has no logout, but a cookie session needs one that
        // actually clears the cookie server-side.
        group.MapPost("/logout", async (SignInManager<ApplicationUser> signInManager) =>
        {
            await signInManager.SignOutAsync();
            return Results.NoContent();
        })
        .RequireAuthorization()
        .WithName("Logout");

        return endpoints;
    }
}
