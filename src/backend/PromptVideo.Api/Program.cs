using System.Threading.RateLimiting;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Infrastructure.Audit;
using PromptVideo.Api.Infrastructure.Logging;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Infrastructure.Retention;
using PromptVideo.Api.Infrastructure.Security;
using PromptVideo.Api.Modules.Admin;
using PromptVideo.Api.Modules.Exports;
using PromptVideo.Api.Modules.Foundation;
using PromptVideo.Api.Modules.Identity;
using PromptVideo.Api.Modules.Subscriptions;
using PromptVideo.Api.Modules.Templates;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddProblemDetails();
builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton(TimeProvider.System);
builder.Services.AddAntiforgery(options =>
{
    options.HeaderName = AntiforgeryEndpointFilter.HeaderName;
    options.Cookie.Name = "PromptVideo.Antiforgery";
    options.Cookie.HttpOnly = true;
    options.Cookie.SameSite = SameSiteMode.Strict;
    options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
});
builder.Services.AddScoped<AntiforgeryEndpointFilter>();
builder.Services.AddScoped<AuditService>();

builder.Services.Configure<EntitlementOptions>(builder.Configuration.GetSection("Entitlements"));
builder.Services.Configure<ExportOptions>(builder.Configuration.GetSection("Exports"));
builder.Services.Configure<RetentionOptions>(builder.Configuration.GetSection("Retention"));

var connectionString = builder.Configuration.GetConnectionString("Postgres")
    ?? throw new InvalidOperationException("ConnectionStrings:Postgres is required.");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString, npgsql => npgsql.EnableRetryOnFailure()));
builder.Services.AddHealthChecks()
    .AddDbContextCheck<ApplicationDbContext>("postgres", tags: ["ready"]);

builder.Services.AddIdentityModule();
builder.Services.AddSubscriptionsModule(builder.Environment);
builder.Services.AddExportsModule();
builder.Services.AddScoped<ReferenceDataSeeder>();
builder.Services.AddHostedService<DataRetentionService>();

// Credential endpoints are the ones worth slowing down: a fixed window per client
// blunts password spraying without affecting ordinary editor traffic.
builder.Services.AddRateLimiter(options =>
{
    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    options.AddPolicy(RateLimitPolicies.Authentication, context =>
        RateLimitPartition.GetFixedWindowLimiter(
            context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
            _ => new FixedWindowRateLimiterOptions
            {
                PermitLimit = builder.Configuration.GetValue("RateLimiting:AuthPermitLimit", 10),
                Window = TimeSpan.FromMinutes(
                    builder.Configuration.GetValue("RateLimiting:AuthWindowMinutes", 1)),
                QueueLimit = 0,
            }));
});

var app = builder.Build();

app.UseExceptionHandler();
app.UseMiddleware<CorrelationIdMiddleware>();
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRateLimiter();
app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapHealthChecks("/health/live", new HealthCheckOptions { Predicate = _ => false });
app.MapHealthChecks("/health/ready", new HealthCheckOptions
{
    Predicate = registration => registration.Tags.Contains("ready"),
});
app.MapFoundationModule();
app.MapIdentityModule();
app.MapSubscriptionsModule(app.Environment);
app.MapExportsModule();
app.MapTemplatesModule();
app.MapAdminModule();
app.MapFallbackToFile("index.html").ExcludeFromDescription();

await app.InitializeDatabaseAsync();
await app.RunAsync();

public partial class Program;
