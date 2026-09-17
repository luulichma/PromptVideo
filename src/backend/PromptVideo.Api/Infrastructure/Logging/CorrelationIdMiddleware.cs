using System.Text.RegularExpressions;

namespace PromptVideo.Api.Infrastructure.Logging;

public sealed partial class CorrelationIdMiddleware(RequestDelegate next)
{
    public const string HeaderName = "X-Correlation-ID";

    public async Task InvokeAsync(HttpContext context, ILogger<CorrelationIdMiddleware> logger)
    {
        var requestedId = context.Request.Headers[HeaderName].FirstOrDefault();
        var correlationId = IsSafeCorrelationId(requestedId) ? requestedId! : Guid.NewGuid().ToString("N");
        context.Response.Headers[HeaderName] = correlationId;

        using (logger.BeginScope(new Dictionary<string, object> { ["CorrelationId"] = correlationId }))
        {
            await next(context);
        }
    }

    private static bool IsSafeCorrelationId(string? value) =>
        value is { Length: > 0 and <= 64 } && CorrelationIdPattern().IsMatch(value);

    [GeneratedRegex("^[A-Za-z0-9._-]+$")]
    private static partial Regex CorrelationIdPattern();
}
