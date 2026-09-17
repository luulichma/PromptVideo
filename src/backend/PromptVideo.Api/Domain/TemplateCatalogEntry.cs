namespace PromptVideo.Api.Domain;

public enum TemplateStatus
{
    Draft = 0,
    Active = 1,
    Retired = 2,
}

/// <summary>
/// Catalog metadata for a template. The rendering assets ship inside the
/// frontend bundle for the MVP; the server stores only identity, version,
/// status, and a manifest describing layout parameters.
/// </summary>
public sealed class TemplateCatalogEntry
{
    public Guid Id { get; set; }

    /// <summary>Stable key the frontend bundle uses to find the bundled assets.</summary>
    public required string TemplateKey { get; set; }

    public required string Name { get; set; }

    public int Version { get; set; }

    public TemplateStatus Status { get; set; }

    /// <summary>
    /// Safe manifest JSON: layout and timing parameters only. It must never
    /// contain user content, image bytes, or external URLs.
    /// </summary>
    public required string ManifestJson { get; set; }

    public DateTimeOffset CreatedAtUtc { get; set; }

    public DateTimeOffset UpdatedAtUtc { get; set; }
}
