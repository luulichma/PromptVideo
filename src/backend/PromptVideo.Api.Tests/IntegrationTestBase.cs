using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Infrastructure.Security;

namespace PromptVideo.Api.Tests;

/// <summary>
/// Gives each test class its own database and application host, plus the small
/// amount of ceremony every authenticated call needs: an antiforgery token and a
/// cookie session.
/// </summary>
[Collection(PostgresSuite.Name)]
public abstract class IntegrationTestBase(PostgresContainerFixture postgres) : IAsyncLifetime
{
    protected PromptVideoApiFactory Factory { get; private set; } = null!;

    protected HttpClient Client { get; private set; } = null!;

    /// <summary>Overridden by the one test that needs Production behaviour.</summary>
    protected virtual string Environment => "Testing";

    /// <summary>Extra configuration for a test class, such as a low rate limit.</summary>
    protected virtual IReadOnlyDictionary<string, string>? Settings => null;

    public async Task InitializeAsync()
    {
        Factory = new PromptVideoApiFactory(await postgres.CreateDatabaseAsync(), Environment, Settings);
        // CreateDefaultClient with our own jar, rather than CreateClient, because
        // the built-in cookie container expires the simulated-clock auth cookie.
        Client = Factory.CreateDefaultClient(new CookieJarHandler());
        // Force host startup now so migrations and seeding are done before the
        // first assertion, and so a startup failure surfaces as a clean error.
        using var warmup = await Client.GetAsync("/api/foundation/status");
        warmup.EnsureSuccessStatusCode();
    }

    public async Task DisposeAsync()
    {
        Client.Dispose();
        await Factory.DisposeAsync();
    }

    protected async Task<(string HeaderName, string Token)> GetAntiforgeryAsync()
    {
        using var response = await Client.GetAsync("/api/security/csrf");
        response.EnsureSuccessStatusCode();
        var body = await response.Content.ReadFromJsonAsync<JsonElement>();
        return (body.GetProperty("headerName").GetString()!, body.GetProperty("token").GetString()!);
    }

    protected async Task<HttpResponseMessage> PostAsync<T>(string uri, T body)
    {
        var (headerName, token) = await GetAntiforgeryAsync();
        using var request = new HttpRequestMessage(HttpMethod.Post, uri)
        {
            Content = JsonContent.Create(body),
        };
        request.Headers.Add(headerName, token);
        return await Client.SendAsync(request);
    }

    protected async Task<HttpResponseMessage> PostEmptyAsync(string uri)
    {
        var (headerName, token) = await GetAntiforgeryAsync();
        using var request = new HttpRequestMessage(HttpMethod.Post, uri);
        request.Headers.Add(headerName, token);
        return await Client.SendAsync(request);
    }

    /// <summary>Registers a user and signs it in on <see cref="Client"/>.</summary>
    protected async Task<Guid> RegisterAndSignInAsync(string email, string password = "Foundation123")
    {
        using var register = await PostAsync("/api/auth/register", new { email, password });
        register.EnsureSuccessStatusCode();

        using var login = await PostAsync("/api/auth/login?useCookies=true", new { email, password });
        login.EnsureSuccessStatusCode();

        return await GetUserIdAsync(email);
    }

    protected async Task<Guid> GetUserIdAsync(string email)
    {
        await using var scope = Factory.Services.CreateAsyncScope();
        var users = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
        var user = await users.FindByEmailAsync(email);
        return user!.Id;
    }

    protected async Task PromoteToAdminAsync(string email)
    {
        await using var scope = Factory.Services.CreateAsyncScope();
        var roles = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole<Guid>>>();
        var users = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
        if (!await roles.RoleExistsAsync(Roles.Admin))
        {
            await roles.CreateAsync(new IdentityRole<Guid>(Roles.Admin));
        }

        var user = await users.FindByEmailAsync(email);
        await users.AddToRoleAsync(user!, Roles.Admin);
    }

    /// <summary>Opens a scope on the application's own service provider.</summary>
    protected AsyncServiceScope CreateScope() => Factory.Services.CreateAsyncScope();
}
