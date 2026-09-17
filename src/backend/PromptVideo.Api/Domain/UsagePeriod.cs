namespace PromptVideo.Api.Domain;

/// <summary>
/// A user's export accounting for one calendar month in UTC. A new month means a
/// new row, which is what resets a metered quota; nothing mutates a past period.
/// </summary>
public sealed class UsagePeriod
{
    public Guid Id { get; set; }

    public Guid UserId { get; set; }

    /// <summary>Inclusive UTC start, always midnight on the first of the month.</summary>
    public DateTimeOffset PeriodStartUtc { get; set; }

    /// <summary>Exclusive UTC end, the first instant of the next month.</summary>
    public DateTimeOffset PeriodEndUtc { get; set; }

    /// <summary>
    /// Reservations that are holding or have consumed a slot. Canceling a
    /// reservation decrements this, completing one leaves it counted.
    /// </summary>
    public int ExportsConsumed { get; set; }

    /// <summary>
    /// PostgreSQL <c>xmin</c>, mapped as a concurrency token so a lost update
    /// cannot silently overwrite a concurrent reservation.
    /// </summary>
    public uint Version { get; set; }

    /// <summary>Start of the UTC calendar month containing <paramref name="instant"/>.</summary>
    public static DateTimeOffset StartOfMonth(DateTimeOffset instant)
    {
        var utc = instant.ToUniversalTime();
        return new DateTimeOffset(utc.Year, utc.Month, 1, 0, 0, 0, TimeSpan.Zero);
    }

    /// <summary>First instant of the UTC month after <paramref name="instant"/>.</summary>
    public static DateTimeOffset StartOfNextMonth(DateTimeOffset instant) =>
        StartOfMonth(instant).AddMonths(1);
}
