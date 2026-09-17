using System.Net;
using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Modules.Subscriptions;

namespace PromptVideo.Api.Tests;

public sealed class SubscriptionTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    [Fact]
    public async Task ANewAccountFallsBackToTheFreePlan()
    {
        await RegisterAndSignInAsync("newcomer@example.test");

        using var response = await Client.GetAsync("/api/me/capabilities");
        response.EnsureSuccessStatusCode();
        var body = await response.Content.ReadFromJsonAsync<JsonElement>();

        Assert.Equal(PlanCatalog.FreeCode, body.GetProperty("planCode").GetString());
        Assert.Equal(720, body.GetProperty("maxExportHeight").GetInt32());
        Assert.True(body.GetProperty("watermarkRequired").GetBoolean());
    }

    [Fact]
    public async Task PayingForPersonalUpgradesCapabilitiesImmediately()
    {
        await RegisterAndSignInAsync("upgrade@example.test");

        using var checkout = await PostAsync("/api/payments/fake/checkout", new { planCode = PlanCatalog.PersonalCode });
        checkout.EnsureSuccessStatusCode();

        using var capabilities = await Client.GetAsync("/api/me/capabilities");
        var body = await capabilities.Content.ReadFromJsonAsync<JsonElement>();

        Assert.Equal(PlanCatalog.PersonalCode, body.GetProperty("planCode").GetString());
        Assert.Equal(1080, body.GetProperty("maxExportHeight").GetInt32());
        Assert.False(body.GetProperty("watermarkRequired").GetBoolean());
        Assert.True(body.GetProperty("hasUnlimitedExports").GetBoolean());
    }

    [Fact]
    public async Task AnExpiredSubscriptionLosesItsCapabilitiesOnTheNextCheck()
    {
        var userId = await RegisterAndSignInAsync("lapsing@example.test");

        using var checkout = await PostAsync("/api/payments/fake/checkout", new { planCode = PlanCatalog.PersonalCode });
        checkout.EnsureSuccessStatusCode();

        using var whilePaid = await Client.GetAsync("/api/me/capabilities");
        Assert.Equal(
            PlanCatalog.PersonalCode,
            (await whilePaid.Content.ReadFromJsonAsync<JsonElement>()).GetProperty("planCode").GetString());

        // One second past the paid period the account is back on the free plan,
        // without any sweep job having run. Moving a year forward also ages out
        // the auth cookie, so sign in again before asking.
        var expiry = await GetExpiryAsync(userId);
        Factory.Clock.SetUtcNow(expiry.AddSeconds(1));
        using var signInAgain = await PostAsync(
            "/api/auth/login?useCookies=true",
            new { email = "lapsing@example.test", password = "Foundation123" });
        signInAgain.EnsureSuccessStatusCode();

        using var afterExpiry = await Client.GetAsync("/api/me/capabilities");
        afterExpiry.EnsureSuccessStatusCode();
        var body = await afterExpiry.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal(PlanCatalog.FreeCode, body.GetProperty("planCode").GetString());
        Assert.Equal(720, body.GetProperty("maxExportHeight").GetInt32());
    }

    [Fact]
    public async Task ReplayingAPaymentEventDoesNotGrantEntitlementTwice()
    {
        var userId = await RegisterAndSignInAsync("replay@example.test");

        var notification = new PaymentNotification(
            FakePaymentGateway.ProviderName,
            "duplicate-event-1",
            userId,
            PlanCatalog.PersonalCode,
            599_000m);

        PaymentApplyResult first;
        PaymentApplyResult second;
        await using (var scope = CreateScope())
        {
            first = await scope.ServiceProvider.GetRequiredService<SubscriptionService>()
                .ApplyPaymentAsync(notification);
        }

        await using (var scope = CreateScope())
        {
            second = await scope.ServiceProvider.GetRequiredService<SubscriptionService>()
                .ApplyPaymentAsync(notification);
        }

        Assert.Equal(PaymentApplyOutcome.Applied, first.Outcome);
        Assert.Equal(PaymentApplyOutcome.Duplicate, second.Outcome);

        await using var verifyScope = CreateScope();
        var database = verifyScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        Assert.Equal(1, await database.Subscriptions.CountAsync(item => item.UserId == userId));
    }

    [Fact]
    public async Task APaymentWithTheWrongAmountIsRejected()
    {
        var userId = await RegisterAndSignInAsync("underpaid@example.test");

        await using var scope = CreateScope();
        var result = await scope.ServiceProvider.GetRequiredService<SubscriptionService>()
            .ApplyPaymentAsync(new PaymentNotification(
                FakePaymentGateway.ProviderName,
                "underpaid-1",
                userId,
                PlanCatalog.PersonalCode,
                1_000m));

        Assert.Equal(PaymentApplyOutcome.AmountMismatch, result.Outcome);
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        Assert.False(await database.Subscriptions.AnyAsync(item => item.UserId == userId));
        Assert.Equal(
            PaymentEventStatus.Rejected,
            (await database.PaymentEvents.SingleAsync(item => item.ExternalEventId == "underpaid-1")).Status);
    }

    [Fact]
    public async Task BuyingTheFreePlanIsRefused()
    {
        await RegisterAndSignInAsync("freeloader@example.test");

        using var checkout = await PostAsync("/api/payments/fake/checkout", new { planCode = PlanCatalog.FreeCode });

        Assert.Equal(HttpStatusCode.BadRequest, checkout.StatusCode);
    }

    [Fact]
    public async Task PlanCatalogIsReadableAnonymouslyAndExposesCapabilitiesAsData()
    {
        using var response = await Client.GetAsync("/api/plans");
        response.EnsureSuccessStatusCode();

        var plans = await response.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal(3, plans.GetArrayLength());

        var free = plans.EnumerateArray().Single(plan => plan.GetProperty("code").GetString() == PlanCatalog.FreeCode);
        var capabilities = free.GetProperty("capabilities").EnumerateArray()
            .ToDictionary(item => item.GetProperty("key").GetString()!, item => item.GetProperty("value").GetString());

        Assert.Equal("3", capabilities[CapabilityKeys.ExportsPerMonth]);
        Assert.Equal("720", capabilities[CapabilityKeys.MaxExportHeight]);
        Assert.Equal("true", capabilities[CapabilityKeys.ExportWatermark]);
    }

    [Fact]
    public async Task CapabilitiesRequireAuthentication()
    {
        using var response = await Client.GetAsync("/api/me/capabilities");

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }

    private async Task<DateTimeOffset> GetExpiryAsync(Guid userId)
    {
        await using var scope = CreateScope();
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var subscription = await database.Subscriptions.SingleAsync(item => item.UserId == userId);
        return subscription.ExpiresAtUtc!.Value;
    }
}

/// <summary>
/// The simulated gateway must not exist in Production, no matter how the app is
/// configured there.
/// </summary>
public sealed class ProductionPaymentTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    protected override string Environment => "Production";

    [Fact]
    public async Task FakeGatewayEndpointIsNotMappedInProduction()
    {
        await RegisterAndSignInAsync("prod@example.test");

        using var response = await PostAsync("/api/payments/fake/checkout", new { planCode = PlanCatalog.PersonalCode });

        // The SPA fallback claims every unmatched path for GET, so an unmapped
        // POST surfaces as 405 rather than 404. Either way the route does not
        // exist; what matters is that it is not a success or a 403.
        Assert.Equal(HttpStatusCode.MethodNotAllowed, response.StatusCode);
    }

    [Fact]
    public async Task FakeGatewayIsNotEvenRegisteredInProduction()
    {
        await using var scope = CreateScope();

        Assert.Null(scope.ServiceProvider.GetService<IPaymentGateway>());
    }
}
