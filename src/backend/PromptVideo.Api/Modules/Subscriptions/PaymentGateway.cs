namespace PromptVideo.Api.Modules.Subscriptions;

/// <summary>
/// A settled payment reported by a gateway. <see cref="ExternalEventId"/> is the
/// gateway's own identifier and is what makes applying the event idempotent.
/// </summary>
public sealed record PaymentNotification(
    string Provider,
    string ExternalEventId,
    Guid UserId,
    string PlanCode,
    decimal AmountVnd);

/// <summary>
/// The port the rest of the application talks to. Swapping in a real provider is
/// a matter of registering a different implementation; nothing outside this
/// interface knows which gateway is in use.
/// </summary>
public interface IPaymentGateway
{
    string Provider { get; }

    /// <summary>Human-readable label surfaced in the UI so simulated payments are never mistaken for real ones.</summary>
    string DisplayLabel { get; }

    /// <summary>
    /// Starts and settles a purchase. A real gateway would return a redirect and
    /// settle later through a webhook; the settled notification is the shape the
    /// application depends on either way.
    /// </summary>
    Task<PaymentNotification> CheckoutAsync(Guid userId, string planCode, CancellationToken cancellationToken = default);
}

/// <summary>
/// Simulated gateway for the MVP. It never contacts a payment network and is
/// only registered outside Production.
/// </summary>
public sealed class FakePaymentGateway(TimeProvider clock) : IPaymentGateway
{
    public const string ProviderName = "fake";

    public string Provider => ProviderName;

    public string DisplayLabel => "Cổng thanh toán giả lập (không thu tiền thật)";

    public Task<PaymentNotification> CheckoutAsync(
        Guid userId,
        string planCode,
        CancellationToken cancellationToken = default)
    {
        var definition = PlanCatalogLookup(planCode);
        var eventId = $"{ProviderName}-{userId:N}-{clock.GetUtcNow().ToUnixTimeMilliseconds()}";
        return Task.FromResult(new PaymentNotification(
            ProviderName,
            eventId,
            userId,
            definition.Code,
            definition.PriceVnd));
    }

    private static Domain.PlanDefinition PlanCatalogLookup(string planCode) =>
        Domain.PlanCatalog.Find(planCode)
        ?? throw new ArgumentException($"Unknown plan code '{planCode}'.", nameof(planCode));
}
