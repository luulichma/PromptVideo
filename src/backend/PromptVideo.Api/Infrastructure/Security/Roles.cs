using System.Diagnostics.CodeAnalysis;
using System.Security.Claims;

namespace PromptVideo.Api.Infrastructure.Security;

public static class Roles
{
    public const string Admin = "Admin";

    /// <summary>Authorization policy name for administrative endpoints.</summary>
    public const string AdminPolicy = "RequireAdmin";
}

public static class ClaimsPrincipalExtensions
{
    /// <summary>
    /// Reads the Identity user id from the principal. Returns false rather than
    /// throwing so endpoints can answer 401 for a malformed or absent identity.
    /// </summary>
    public static bool TryGetUserId(this ClaimsPrincipal? principal, [NotNullWhen(true)] out Guid userId)
    {
        userId = Guid.Empty;
        var value = principal?.FindFirstValue(ClaimTypes.NameIdentifier);
        return value is not null && Guid.TryParse(value, out userId);
    }
}
