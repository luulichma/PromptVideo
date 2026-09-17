using System.Net;
using System.Net.Http.Json;
using System.Text.Json;

namespace PromptVideo.Api.Tests;

public sealed class FoundationApiTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    [Fact]
    public async Task LiveHealthAndFoundationStatusAreAvailable()
    {
        using var health = await Client.GetAsync("/health/live");
        using var status = await Client.GetAsync("/api/foundation/status");

        Assert.Equal(HttpStatusCode.OK, health.StatusCode);
        Assert.Equal(HttpStatusCode.OK, status.StatusCode);
        var body = await status.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal("ok", body.GetProperty("status").GetString());
    }

    [Fact]
    public async Task FoundationHealthReportsReadinessWithoutLeakingCheckDetail()
    {
        using var response = await Client.GetAsync("/api/foundation/health");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var body = await response.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal("Healthy", body.GetProperty("status").GetString());

        var checks = body.GetProperty("checks").EnumerateArray().ToArray();
        Assert.Contains(checks, check => check.GetProperty("name").GetString() == "postgres");
        foreach (var check in checks)
        {
            Assert.Equal(2, check.EnumerateObject().Count());
            Assert.False(check.TryGetProperty("description", out _));
            Assert.False(check.TryGetProperty("exception", out _));
        }
    }

    [Fact]
    public async Task CorrelationIdIsEchoedOrSafelyReplaced()
    {
        using var validRequest = new HttpRequestMessage(HttpMethod.Get, "/health/live");
        validRequest.Headers.Add("X-Correlation-ID", "foundation-test_01");
        using var validResponse = await Client.SendAsync(validRequest);
        Assert.Equal("foundation-test_01", validResponse.Headers.GetValues("X-Correlation-ID").Single());

        using var invalidRequest = new HttpRequestMessage(HttpMethod.Get, "/health/live");
        invalidRequest.Headers.Add("X-Correlation-ID", "unsafe header value");
        using var invalidResponse = await Client.SendAsync(invalidRequest);
        Assert.True(Guid.TryParse(invalidResponse.Headers.GetValues("X-Correlation-ID").Single(), out _));
    }

    [Fact]
    public async Task PrivateEndpointRejectsAnonymousRequests()
    {
        using var response = await Client.GetAsync("/api/foundation/private");

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }

    [Fact]
    public async Task UnsafeRequestRequiresAntiforgeryToken()
    {
        using var response = await Client.PostAsync("/api/foundation/csrf-check", null);

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task AntiforgeryTokenAllowsUnsafeRequestAndUsesHttpOnlyCookie()
    {
        using var tokenResponse = await Client.GetAsync("/api/security/csrf");
        var cookie = tokenResponse.Headers.GetValues("Set-Cookie").Single();
        Assert.Contains("httponly", cookie, StringComparison.OrdinalIgnoreCase);

        using var response = await PostEmptyAsync("/api/foundation/csrf-check");
        Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
    }
}
