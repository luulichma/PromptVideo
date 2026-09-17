namespace PromptVideo.Api.Infrastructure.Security;

public static class RateLimitPolicies
{
    /// <summary>Applied to credential endpoints to blunt password spraying.</summary>
    public const string Authentication = "authentication";
}
