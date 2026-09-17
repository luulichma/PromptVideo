using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Domain;
using PromptVideo.Api.Infrastructure.Persistence;

namespace PromptVideo.Api.Modules.Templates;

public static class TemplatesModule
{
    public static IEndpointRouteBuilder MapTemplatesModule(this IEndpointRouteBuilder endpoints)
    {
        ArgumentNullException.ThrowIfNull(endpoints);

        var group = endpoints.MapGroup("/api/templates").WithTags("Templates");
        // Reading the catalog is anonymous: it is public product metadata and the
        // editor needs it before sign-in. Only active entries are ever returned.
        group.MapGet("/", GetActiveTemplatesAsync).WithName("GetTemplates").AllowAnonymous();
        return endpoints;
    }

    private static async Task<Ok<IReadOnlyList<TemplateResponse>>> GetActiveTemplatesAsync(
        ApplicationDbContext database,
        CancellationToken cancellationToken)
    {
        var templates = await database.TemplateCatalogEntries
            .AsNoTracking()
            .Where(entry => entry.Status == TemplateStatus.Active)
            .OrderBy(entry => entry.TemplateKey)
            .ToListAsync(cancellationToken);

        IReadOnlyList<TemplateResponse> response = [.. templates.Select(ToResponse)];
        return TypedResults.Ok(response);
    }

    internal static TemplateResponse ToResponse(TemplateCatalogEntry entry) =>
        new(entry.TemplateKey, entry.Name, entry.Version, entry.Status.ToString(), entry.ManifestJson);
}

public sealed record TemplateResponse(
    string TemplateKey,
    string Name,
    int Version,
    string Status,
    string ManifestJson);
