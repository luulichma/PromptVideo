namespace PromptVideo.Api.Tests;

/// <summary>
/// Enforces docs/logging-policy.md: an authentication round trip must not leave
/// credentials, cookies, antiforgery tokens, or connection strings in the logs.
/// </summary>
public sealed class LoggingRedactionTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    private const string Password = "RedactionProbe123";

    [Fact]
    public async Task AuthenticationRoundTripDoesNotLogSecrets()
    {
        const string email = "redaction@example.test";
        using var register = await PostAsync("/api/auth/register", new { email, password = Password });
        register.EnsureSuccessStatusCode();

        var (_, token) = await GetAntiforgeryAsync();
        using var login = await PostAsync("/api/auth/login?useCookies=true", new { email, password = Password });
        login.EnsureSuccessStatusCode();

        var authCookie = login.Headers.GetValues("Set-Cookie")
            .Single(value => value.StartsWith("PromptVideo.Auth=", StringComparison.Ordinal));
        var cookieValue = authCookie["PromptVideo.Auth=".Length..].Split(';')[0];

        var logs = Factory.Logs.Text;
        Assert.NotEmpty(logs);
        Assert.DoesNotContain(Password, logs, StringComparison.Ordinal);
        Assert.DoesNotContain(cookieValue, logs, StringComparison.Ordinal);
        Assert.DoesNotContain(token, logs, StringComparison.Ordinal);
        Assert.DoesNotContain("Set-Cookie", logs, StringComparison.OrdinalIgnoreCase);
        Assert.DoesNotContain("Password=", logs, StringComparison.OrdinalIgnoreCase);
    }

    [Fact]
    public async Task CorrelationIdIsAvailableToLogScopes()
    {
        using var request = new HttpRequestMessage(HttpMethod.Get, "/api/foundation/status");
        request.Headers.Add("X-Correlation-ID", "redaction-probe_01");
        using var response = await Client.SendAsync(request);
        response.EnsureSuccessStatusCode();

        Assert.Contains("redaction-probe_01", Factory.Logs.Text, StringComparison.Ordinal);
    }
}
