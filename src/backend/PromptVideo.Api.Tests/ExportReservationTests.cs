using System.Net;
using System.Net.Http.Json;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Persistence;
using PromptVideo.Api.Modules.Exports;

namespace PromptVideo.Api.Tests;

/// <summary>
/// The reserve → complete/cancel protocol and the quota invariants that protect it.
/// </summary>
public sealed class ExportReservationTests(PostgresContainerFixture postgres) : IntegrationTestBase(postgres)
{
    [Fact]
    public async Task FreePlanGrants720pWithWatermarkAndClampsAnOverAmbitiousRequest()
    {
        await RegisterAndSignInAsync("free-export@example.test");

        using var response = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "key-1", requestedHeight = 1080 });
        response.EnsureSuccessStatusCode();

        var body = await response.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal(720, body.GetProperty("grantedHeight").GetInt32());
        Assert.True(body.GetProperty("watermarkRequired").GetBoolean());
        Assert.Equal(2, body.GetProperty("exportsRemaining").GetInt32());
    }

    [Fact]
    public async Task RetryingWithTheSameIdempotencyKeyDoesNotConsumeASecondSlot()
    {
        await RegisterAndSignInAsync("idempotent@example.test");

        using var first = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "retry-me", requestedHeight = 720 });
        first.EnsureSuccessStatusCode();
        var firstBody = await first.Content.ReadFromJsonAsync<JsonElement>();

        using var second = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "retry-me", requestedHeight = 720 });
        second.EnsureSuccessStatusCode();
        var secondBody = await second.Content.ReadFromJsonAsync<JsonElement>();

        Assert.Equal(
            firstBody.GetProperty("reservationId").GetGuid(),
            secondBody.GetProperty("reservationId").GetGuid());
        Assert.Equal(1, await CountConsumedAsync("idempotent@example.test"));
    }

    [Fact]
    public async Task FourthExportInAMonthIsRefusedOnTheFreePlan()
    {
        await RegisterAndSignInAsync("quota@example.test");

        for (var index = 0; index < 3; index++)
        {
            using var allowed = await PostAsync(
                "/api/exports/reservations",
                new { idempotencyKey = $"quota-{index}", requestedHeight = 720 });
            allowed.EnsureSuccessStatusCode();
        }

        using var refused = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "quota-3", requestedHeight = 720 });

        Assert.Equal(HttpStatusCode.Forbidden, refused.StatusCode);
        Assert.Equal(3, await CountConsumedAsync("quota@example.test"));
    }

    [Fact]
    public async Task CancelingAReservationReturnsTheSlot()
    {
        await RegisterAndSignInAsync("cancel@example.test");

        using var reserved = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "cancel-me", requestedHeight = 720 });
        reserved.EnsureSuccessStatusCode();
        var reservationId = (await reserved.Content.ReadFromJsonAsync<JsonElement>())
            .GetProperty("reservationId").GetGuid();

        using var canceled = await PostEmptyAsync($"/api/exports/reservations/{reservationId}/cancel");
        canceled.EnsureSuccessStatusCode();

        Assert.Equal(0, await CountConsumedAsync("cancel@example.test"));
    }

    [Fact]
    public async Task CompletedReservationsAreNotRefundableAndCompletingIsIdempotent()
    {
        await RegisterAndSignInAsync("complete@example.test");

        using var reserved = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "complete-me", requestedHeight = 720 });
        reserved.EnsureSuccessStatusCode();
        var reservationId = (await reserved.Content.ReadFromJsonAsync<JsonElement>())
            .GetProperty("reservationId").GetGuid();

        using var completed = await PostEmptyAsync($"/api/exports/reservations/{reservationId}/complete");
        completed.EnsureSuccessStatusCode();

        // Completing twice is a safe retry, not a second charge.
        using var completedAgain = await PostEmptyAsync($"/api/exports/reservations/{reservationId}/complete");
        completedAgain.EnsureSuccessStatusCode();

        // Cancelling something already delivered must not refund the slot.
        using var cancelAttempt = await PostEmptyAsync($"/api/exports/reservations/{reservationId}/cancel");
        Assert.Equal(HttpStatusCode.Conflict, cancelAttempt.StatusCode);

        Assert.Equal(1, await CountConsumedAsync("complete@example.test"));
    }

    [Fact]
    public async Task ConcurrentReservesCannotExceedTheQuota()
    {
        var userId = await RegisterAndSignInAsync("race@example.test");

        // Eight simultaneous reserves against a quota of three. Without the row
        // version on UsagePeriod, several would read "0 used" and all succeed.
        var attempts = await Task.WhenAll(Enumerable.Range(0, 8).Select(async index =>
        {
            await using var scope = CreateScope();
            var reservations = scope.ServiceProvider.GetRequiredService<ExportReservationService>();
            return await reservations.ReserveAsync(userId, $"race-{index}", 720);
        }));

        Assert.Equal(3, attempts.Count(result => result.Outcome == ReserveOutcome.Reserved));
        Assert.Equal(5, attempts.Count(result => result.Outcome == ReserveOutcome.QuotaExceeded));
        Assert.Equal(3, await CountConsumedAsync("race@example.test"));
    }

    [Fact]
    public async Task QuotaResetsWhenTheClockCrossesIntoANewMonth()
    {
        // Just before midnight on the last day of January, in UTC.
        Factory.Clock.SetUtcNow(new DateTimeOffset(2026, 1, 31, 23, 50, 0, TimeSpan.Zero));
        await RegisterAndSignInAsync("monthly@example.test");


        for (var index = 0; index < 3; index++)
        {
            using var allowed = await PostAsync(
                "/api/exports/reservations",
                new { idempotencyKey = $"jan-{index}", requestedHeight = 720 });
            allowed.EnsureSuccessStatusCode();
        }

        using var refused = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "jan-3", requestedHeight = 720 });
        Assert.Equal(HttpStatusCode.Forbidden, refused.StatusCode);

        // Crossing midnight into February opens a new usage period.
        Factory.Clock.SetUtcNow(new DateTimeOffset(2026, 2, 1, 0, 5, 0, TimeSpan.Zero));

        using var february = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "feb-0", requestedHeight = 720 });
        february.EnsureSuccessStatusCode();
        var body = await february.Content.ReadFromJsonAsync<JsonElement>();
        Assert.Equal(2, body.GetProperty("exportsRemaining").GetInt32());
    }

    [Fact]
    public async Task AnUnsupportedHeightIsRejected()
    {
        await RegisterAndSignInAsync("height@example.test");

        using var response = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "bad-height", requestedHeight = 4320 });

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task AnExpiredReservationReleasesItsSlotOnTheNextReserve()
    {
        await RegisterAndSignInAsync("expiry@example.test");

        using var reserved = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "abandoned", requestedHeight = 720 });
        reserved.EnsureSuccessStatusCode();
        Assert.Equal(1, await CountConsumedAsync("expiry@example.test"));

        // Past the 30 minute reservation lifetime the abandoned hold is released.
        Factory.Clock.Advance(TimeSpan.FromMinutes(31));

        using var next = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "fresh", requestedHeight = 720 });
        next.EnsureSuccessStatusCode();

        Assert.Equal(1, await CountConsumedAsync("expiry@example.test"));
    }

    [Fact]
    public async Task ReservingRequiresAuthenticationAndAnAntiforgeryToken()
    {
        using var anonymous = await PostAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "anon", requestedHeight = 720 });
        Assert.Equal(HttpStatusCode.Unauthorized, anonymous.StatusCode);

        await RegisterAndSignInAsync("csrf-export@example.test");
        using var withoutToken = await Client.PostAsJsonAsync(
            "/api/exports/reservations",
            new { idempotencyKey = "no-token", requestedHeight = 720 });
        Assert.Equal(HttpStatusCode.BadRequest, withoutToken.StatusCode);
    }

    private async Task<int> CountConsumedAsync(string email)
    {
        var userId = await GetUserIdAsync(email);
        await using var scope = CreateScope();
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var periodStart = UsagePeriod.StartOfMonth(Factory.Clock.GetUtcNow());
        return await database.UsagePeriods
            .Where(period => period.UserId == userId && period.PeriodStartUtc == periodStart)
            .Select(period => (int?)period.ExportsConsumed)
            .FirstOrDefaultAsync() ?? 0;
    }
}
