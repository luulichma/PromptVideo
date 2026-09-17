using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Time.Testing;

namespace PromptVideo.Api.Tests;

/// <summary>
/// Hosts the real application against a real PostgreSQL database, with only the
/// clock and the log sink substituted. Running the genuine Npgsql provider is
/// what makes the concurrency and idempotency tests meaningful: unique-index
/// violations and row-version conflicts do not occur on an in-memory provider.
/// </summary>
public sealed class PromptVideoApiFactory(
    string connectionString,
    string environment = "Testing",
    IReadOnlyDictionary<string, string>? settings = null)
    : WebApplicationFactory<Program>
{
    /// <summary>Everything the application logged, for asserting redaction rules.</summary>
    public CapturedLogs Logs { get; } = new();

    /// <summary>
    /// Controllable clock, started early in the year so tests can move forward
    /// across a month boundary. Month-reset and expiry rules are exercised by
    /// moving this, never by waiting on or reading the system clock.
    /// </summary>
    public FakeTimeProvider Clock { get; } = new(new DateTimeOffset(2026, 1, 10, 9, 0, 0, TimeSpan.Zero));

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.UseEnvironment(environment);
        builder.UseSetting("ConnectionStrings:Postgres", connectionString);
        // Each factory owns an empty database, so it must build the schema and
        // seed plan policy before the first request.
        builder.UseSetting("Database:ApplyMigrationsOnStartup", "true");
        builder.UseSetting("Database:SeedDevelopmentUser", "false");
        // A test class makes many more auth calls than a real client would, so the
        // limiter is effectively off unless a test opts into a low limit.
        builder.UseSetting("RateLimiting:AuthPermitLimit", "1000");

        foreach (var (key, value) in settings ?? new Dictionary<string, string>())
        {
            builder.UseSetting(key, value);
        }

        builder.ConfigureTestServices(services =>
        {
            services.AddSingleton<ILoggerProvider>(new CapturingLoggerProvider(Logs));
            services.AddSingleton<TimeProvider>(Clock);
        });
    }
}

public sealed class CapturedLogs
{
    private readonly List<string> entries = [];
    private readonly Lock gate = new();

    public void Add(string entry)
    {
        lock (gate)
        {
            entries.Add(entry);
        }
    }

    public string Text
    {
        get
        {
            lock (gate)
            {
                return string.Join('\n', entries);
            }
        }
    }
}

internal sealed class CapturingLoggerProvider(CapturedLogs logs) : ILoggerProvider
{
    public ILogger CreateLogger(string categoryName) => new CapturingLogger(categoryName, logs);

    public void Dispose()
    {
    }

    private sealed class CapturingLogger(string category, CapturedLogs logs) : ILogger
    {
        public IDisposable? BeginScope<TState>(TState state)
            where TState : notnull
        {
            logs.Add($"{category} scope: {Describe(state)}");
            return null;
        }

        public bool IsEnabled(LogLevel logLevel) => true;

        public void Log<TState>(
            LogLevel logLevel,
            EventId eventId,
            TState state,
            Exception? exception,
            Func<TState, Exception?, string> formatter)
        {
            ArgumentNullException.ThrowIfNull(formatter);
            logs.Add($"{category} [{logLevel}] {formatter(state, exception)} {exception}");
        }

        // Structured scope state is usually a dictionary, whose ToString() is just
        // the type name, so expand the key/value pairs instead.
        private static string Describe<TState>(TState state) => state is IEnumerable<KeyValuePair<string, object>> pairs
            ? string.Join(", ", pairs.Select(pair => $"{pair.Key}={pair.Value}"))
            : state?.ToString() ?? string.Empty;
    }
}
