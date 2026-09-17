namespace PromptVideo.Api.Tests;

/// <summary>
/// A minimal cookie jar that deliberately ignores cookie expiry.
///
/// The application runs on a simulated clock, so it stamps auth cookies with an
/// expiry relative to that clock. <see cref="System.Net.CookieContainer"/> judges
/// expiry against the real machine clock and would throw those cookies away the
/// moment the two disagree. Following the application's own clock is the point of
/// the test, so this jar keeps whatever the server set until the server clears it.
/// </summary>
internal sealed class CookieJarHandler : DelegatingHandler
{
    private readonly Dictionary<string, string> cookies = new(StringComparer.Ordinal);

    protected override async Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(request);

        lock (cookies)
        {
            if (cookies.Count > 0)
            {
                request.Headers.Add("Cookie", string.Join("; ", cookies.Select(pair => $"{pair.Key}={pair.Value}")));
            }
        }

        var response = await base.SendAsync(request, cancellationToken);

        if (response.Headers.TryGetValues("Set-Cookie", out var setCookies))
        {
            lock (cookies)
            {
                foreach (var header in setCookies)
                {
                    Apply(header);
                }
            }
        }

        return response;
    }

    private void Apply(string header)
    {
        var pair = header.Split(';')[0];
        var separator = pair.IndexOf('=', StringComparison.Ordinal);
        if (separator <= 0)
        {
            return;
        }

        var name = pair[..separator].Trim();
        var value = pair[(separator + 1)..];

        // Signing out sets the cookie to an empty value, which clears it here too.
        if (string.IsNullOrEmpty(value))
        {
            cookies.Remove(name);
        }
        else
        {
            cookies[name] = value;
        }
    }
}
