using System.Net;

namespace PromptVideo.Api.Tests;

/// <summary>
/// The credential endpoints sit behind a fixed-window limiter. This class opts
/// into a deliberately tiny window so the refusal is observable without making
/// hundreds of requests.
/// </summary>
public sealed class AuthRateLimitTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    protected override IReadOnlyDictionary<string, string> Settings => new Dictionary<string, string>
    {
        ["RateLimiting:AuthPermitLimit"] = "3",
        ["RateLimiting:AuthWindowMinutes"] = "5",
    };

    [Fact]
    public async Task RepeatedLoginAttemptsAreThrottled()
    {
        var statuses = new List<HttpStatusCode>();
        for (var attempt = 0; attempt < 6; attempt++)
        {
            using var response = await PostAsync(
                "/api/auth/login?useCookies=true",
                new { email = "throttled@example.test", password = "WrongPassword1" });
            statuses.Add(response.StatusCode);
        }

        Assert.Contains(HttpStatusCode.TooManyRequests, statuses);
        // The limit applies to the window, not to every request: the first few
        // attempts still reach Identity and are refused on their merits.
        Assert.Contains(HttpStatusCode.Unauthorized, statuses);
    }

    [Fact]
    public async Task ThrottlingDoesNotAffectOrdinaryEditorTraffic()
    {
        for (var attempt = 0; attempt < 10; attempt++)
        {
            using var response = await Client.GetAsync("/api/templates");
            response.EnsureSuccessStatusCode();
        }
    }
}
