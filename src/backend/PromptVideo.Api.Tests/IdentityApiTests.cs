using System.Net;

namespace PromptVideo.Api.Tests;

/// <summary>
/// Covers the credential surface required by plan 03: success, failure, lockout,
/// forbidden, logout, and password change.
/// </summary>
public sealed class IdentityApiTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    private const string Email = "identity@example.test";
    private const string Password = "Foundation123";

    [Fact]
    public async Task CookieLoginIsHttpOnlyAndSameSiteLax()
    {
        using var register = await PostAsync("/api/auth/register", new { email = Email, password = Password });
        Assert.Equal(HttpStatusCode.OK, register.StatusCode);

        using var login = await PostAsync("/api/auth/login?useCookies=true", new { email = Email, password = Password });
        Assert.Equal(HttpStatusCode.OK, login.StatusCode);

        var authCookie = login.Headers.GetValues("Set-Cookie")
            .Single(value => value.StartsWith("PromptVideo.Auth=", StringComparison.Ordinal));
        Assert.Contains("httponly", authCookie, StringComparison.OrdinalIgnoreCase);
        Assert.Contains("samesite=lax", authCookie, StringComparison.OrdinalIgnoreCase);
    }

    [Fact]
    public async Task WrongPasswordIsRejectedAndRepeatedFailuresLockTheAccount()
    {
        using var register = await PostAsync("/api/auth/register", new { email = "lockout@example.test", password = Password });
        register.EnsureSuccessStatusCode();

        // Identity locks out after 5 failed attempts; the 6th is refused even
        // though the password is correct.
        for (var attempt = 0; attempt < 5; attempt++)
        {
            using var failure = await PostAsync(
                "/api/auth/login?useCookies=true",
                new { email = "lockout@example.test", password = "WrongPassword1" });
            Assert.Equal(HttpStatusCode.Unauthorized, failure.StatusCode);
        }

        using var lockedOut = await PostAsync(
            "/api/auth/login?useCookies=true",
            new { email = "lockout@example.test", password = Password });
        Assert.Equal(HttpStatusCode.Unauthorized, lockedOut.StatusCode);
        Assert.Contains("LockedOut", await lockedOut.Content.ReadAsStringAsync(), StringComparison.Ordinal);
    }

    [Fact]
    public async Task AdminEndpointIsForbiddenForOrdinaryUsersAndAllowedForAdmins()
    {
        await RegisterAndSignInAsync("ordinary@example.test");

        using var forbidden = await Client.GetAsync("/api/admin/metrics");
        Assert.Equal(HttpStatusCode.Forbidden, forbidden.StatusCode);

        await PromoteToAdminAsync("ordinary@example.test");
        // The cookie carries the old roles, so sign in again to pick up the change.
        using var login = await PostAsync(
            "/api/auth/login?useCookies=true",
            new { email = "ordinary@example.test", password = "Foundation123" });
        login.EnsureSuccessStatusCode();

        using var allowed = await Client.GetAsync("/api/admin/metrics");
        Assert.Equal(HttpStatusCode.OK, allowed.StatusCode);
    }

    [Fact]
    public async Task LogoutClearsTheSession()
    {
        await RegisterAndSignInAsync("logout@example.test");
        using var beforeLogout = await Client.GetAsync("/api/foundation/private");
        Assert.Equal(HttpStatusCode.NoContent, beforeLogout.StatusCode);

        using var logout = await PostEmptyAsync("/api/auth/logout");
        Assert.Equal(HttpStatusCode.NoContent, logout.StatusCode);

        using var afterLogout = await Client.GetAsync("/api/foundation/private");
        Assert.Equal(HttpStatusCode.Unauthorized, afterLogout.StatusCode);
    }

    [Fact]
    public async Task PasswordCanBeChangedAndTheOldOneStopsWorking()
    {
        const string email = "changepw@example.test";
        const string newPassword = "Foundation456";
        await RegisterAndSignInAsync(email);

        using var change = await PostAsync(
            "/api/auth/manage/info",
            new { oldPassword = Password, newPassword });
        change.EnsureSuccessStatusCode();

        using var logout = await PostEmptyAsync("/api/auth/logout");
        logout.EnsureSuccessStatusCode();

        using var oldPasswordLogin = await PostAsync(
            "/api/auth/login?useCookies=true",
            new { email, password = Password });
        Assert.Equal(HttpStatusCode.Unauthorized, oldPasswordLogin.StatusCode);

        using var newPasswordLogin = await PostAsync(
            "/api/auth/login?useCookies=true",
            new { email, password = newPassword });
        Assert.Equal(HttpStatusCode.OK, newPasswordLogin.StatusCode);
    }
}
