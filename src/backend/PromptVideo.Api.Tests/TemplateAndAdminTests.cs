using System.Net;
using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Infrastructure.Retention;

namespace PromptVideo.Api.Tests;

public sealed class TemplateAndAdminTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    [Fact]
    public async Task OrdinaryCallersSeeOnlyActiveTemplates()
    {
        using var seeded = await Client.GetAsync("/api/templates");
        seeded.EnsureSuccessStatusCode();
        var before = await seeded.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal(5, before.GetArrayLength());

        await RetireAsync("promo");

        using var after = await Client.GetAsync("/api/templates");
        var templates = await after.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal(4, templates.GetArrayLength());
        Assert.DoesNotContain(
            templates.EnumerateArray(),
            template => template.GetProperty("templateKey").GetString() == "promo");
    }

    [Fact]
    public async Task OnlyAnAdminMayChangeTemplateStatus()
    {
        await RegisterAndSignInAsync("template-user@example.test");

        using var forbidden = await PostAsync("/api/admin/templates/promo/status", new { status = "Retired" });
        Assert.Equal(HttpStatusCode.Forbidden, forbidden.StatusCode);

        await PromoteToAdminAsync("template-user@example.test");
        using var login = await PostAsync(
            "/api/auth/login?useCookies=true",
            new { email = "template-user@example.test", password = "Foundation123" });
        login.EnsureSuccessStatusCode();

        using var allowed = await PostAsync("/api/admin/templates/promo/status", new { status = "Retired" });
        allowed.EnsureSuccessStatusCode();
        var body = await allowed.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal("Retired", body.GetProperty("status").GetString());
    }

    [Fact]
    public async Task AdminSeesEveryTemplateIncludingRetiredOnes()
    {
        await SignInAsAdminAsync("catalog-admin@example.test");
        await RetireAsync("promo");

        using var response = await Client.GetAsync("/api/admin/templates");
        response.EnsureSuccessStatusCode();
        var templates = await response.Content.ReadFromJsonAsync<JsonElement>();

        Assert.Equal(5, templates.GetArrayLength());
    }

    [Fact]
    public async Task TemplateManifestsCarryLayoutParametersOnly()
    {
        using var response = await Client.GetAsync("/api/templates");
        var templates = await response.Content.ReadFromJsonAsync<JsonElement>();

        foreach (var template in templates.EnumerateArray())
        {
            var manifest = JsonDocument.Parse(template.GetProperty("manifestJson").GetString()!).RootElement;
            Assert.True(manifest.TryGetProperty("sceneCount", out _));
            // A manifest must not point anywhere or carry content.
            Assert.False(manifest.TryGetProperty("assetUrl", out _));
            Assert.DoesNotContain("http", manifest.GetRawText(), StringComparison.OrdinalIgnoreCase);
        }
    }

    [Fact]
    public async Task AdminMetricsAreAggregatesWithNoUserContent()
    {
        await SignInAsAdminAsync("metrics-admin@example.test");

        using var reserved = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "metrics-1", requestedHeight = 720 });
        reserved.EnsureSuccessStatusCode();

        using var response = await Client.GetAsync("/api/admin/metrics");
        response.EnsureSuccessStatusCode();
        var body = await response.Content.ReadFromJsonAsync<JsonElement>();

        Assert.Equal(1, body.GetProperty("reservationsTotal").GetInt32());
        Assert.Equal(1, body.GetProperty("reservationsOutstanding").GetInt32());
        Assert.Equal(1, body.GetProperty("exportsConsumedThisPeriod").GetInt32());
        Assert.Equal(5, body.GetProperty("activeTemplateCount").GetInt32());

        // Every leaf is a number, a timestamp, or a plan code. Nothing can carry
        // a project, an image name, a token, or an email address.
        var raw = body.GetRawText();
        Assert.DoesNotContain("@example.test", raw, StringComparison.OrdinalIgnoreCase);
        Assert.DoesNotContain("metrics-1", raw, StringComparison.OrdinalIgnoreCase);
    }

    [Fact]
    public async Task AuditTrailRecordsActionsWithoutContent()
    {
        await RegisterAndSignInAsync("audit@example.test");
        using var reserved = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "audit-key-should-not-be-logged", requestedHeight = 720 });
        reserved.EnsureSuccessStatusCode();

        await using var scope = CreateScope();
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var events = await database.AuditEvents.ToListAsync();

        Assert.Contains(events, item => item.Action == AuditActions.ExportReserved);
        foreach (var item in events)
        {
            Assert.DoesNotContain("audit-key-should-not-be-logged", item.SubjectId ?? string.Empty, StringComparison.Ordinal);
            Assert.DoesNotContain("@example.test", item.SubjectId ?? string.Empty, StringComparison.Ordinal);
        }
    }

    [Fact]
    public async Task RetentionSweepReleasesAbandonedReservationsAndPrunesOldRows()
    {
        await RegisterAndSignInAsync("retention@example.test");
        using var reserved = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "abandoned", requestedHeight = 720 });
        reserved.EnsureSuccessStatusCode();

        // Past the reservation lifetime but inside the retention window.
        Factory.Clock.Advance(TimeSpan.FromHours(1));
        var released = await SweepAsync();
        Assert.Equal(1, released.ReleasedReservations);

        // Past the retention window the resolved rows are deleted outright.
        Factory.Clock.Advance(TimeSpan.FromDays(200));
        var pruned = await SweepAsync();
        Assert.True(pruned.DeletedReservations >= 1);
        Assert.True(pruned.DeletedAuditEvents >= 1);

        await using var scope = CreateScope();
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        Assert.Empty(await database.ExportReservations.ToListAsync());
    }

    private async Task<RetentionSummary> SweepAsync()
    {
        var retention = Factory.Services.GetServices<IHostedService>().OfType<DataRetentionService>().Single();
        return await retention.SweepAsync(CancellationToken.None);
    }

    private async Task SignInAsAdminAsync(string email)
    {
        await RegisterAndSignInAsync(email);
        await PromoteToAdminAsync(email);
        using var login = await PostAsync(
            "/api/auth/login?useCookies=true",
            new { email, password = "Foundation123" });
        login.EnsureSuccessStatusCode();
    }

    private async Task RetireAsync(string templateKey)
    {
        await using var scope = CreateScope();
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var entry = await database.TemplateCatalogEntries.SingleAsync(item => item.TemplateKey == templateKey);
        entry.Status = TemplateStatus.Retired;
        await database.SaveChangesAsync();
    }
}
