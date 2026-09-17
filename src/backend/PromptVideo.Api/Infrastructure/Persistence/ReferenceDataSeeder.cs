using System.Globalization;
using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Domain;

namespace PromptVideo.Api.Infrastructure.Persistence;

/// <summary>
/// Brings plan policy and the template catalog in line with the definitions in
/// code. It runs on every startup that applies migrations and is idempotent, so
/// changing a quota is a redeploy rather than a manual UPDATE.
/// </summary>
public sealed class ReferenceDataSeeder(ApplicationDbContext database, TimeProvider clock)
{
    public async Task SeedAsync(CancellationToken cancellationToken = default)
    {
        await SeedPlansAsync(cancellationToken);
        await SeedTemplatesAsync(cancellationToken);
        await database.SaveChangesAsync(cancellationToken);
    }

    private async Task SeedPlansAsync(CancellationToken cancellationToken)
    {
        var existing = await database.Plans
            .Include(plan => plan.Entitlements)
            .ToDictionaryAsync(plan => plan.Code, StringComparer.Ordinal, cancellationToken);

        foreach (var definition in PlanCatalog.All)
        {
            if (!existing.TryGetValue(definition.Code, out var plan))
            {
                plan = new Plan
                {
                    Id = Guid.NewGuid(),
                    Code = definition.Code,
                    Name = definition.Name,
                    PriceVnd = definition.PriceVnd,
                    BillingPeriodMonths = definition.BillingPeriodMonths,
                    IsDefault = definition.IsDefault,
                };
                database.Plans.Add(plan);
            }
            else
            {
                plan.Name = definition.Name;
                plan.PriceVnd = definition.PriceVnd;
                plan.BillingPeriodMonths = definition.BillingPeriodMonths;
                plan.IsDefault = definition.IsDefault;
            }

            SyncEntitlements(plan, definition);
        }
    }

    private void SyncEntitlements(Plan plan, PlanDefinition definition)
    {
        foreach (var (key, value) in definition.Capabilities)
        {
            var entitlement = plan.Entitlements.FirstOrDefault(item => item.Key == key);
            if (entitlement is null)
            {
                plan.Entitlements.Add(new Entitlement
                {
                    Id = Guid.NewGuid(),
                    PlanId = plan.Id,
                    Key = key,
                    Value = value,
                });
            }
            else
            {
                entitlement.Value = value;
            }
        }

        // Drop capabilities that the catalog no longer defines.
        var stale = plan.Entitlements
            .Where(item => !definition.Capabilities.ContainsKey(item.Key))
            .ToList();
        foreach (var entitlement in stale)
        {
            database.Entitlements.Remove(entitlement);
        }
    }

    private async Task SeedTemplatesAsync(CancellationToken cancellationToken)
    {
        var now = clock.GetUtcNow();
        var existing = await database.TemplateCatalogEntries
            .ToDictionaryAsync(entry => entry.TemplateKey, StringComparer.Ordinal, cancellationToken);

        foreach (var (key, name, sceneCount) in DefaultTemplates)
        {
            if (existing.ContainsKey(key))
            {
                continue;
            }

            database.TemplateCatalogEntries.Add(new TemplateCatalogEntry
            {
                Id = Guid.NewGuid(),
                TemplateKey = key,
                Name = name,
                Version = 1,
                Status = TemplateStatus.Active,
                ManifestJson = BuildManifest(key, sceneCount),
                CreatedAtUtc = now,
                UpdatedAtUtc = now,
            });
        }
    }

    /// <summary>The five MVP templates. Rendering assets ship in the frontend bundle.</summary>
    private static readonly (string Key, string Name, int SceneCount)[] DefaultTemplates =
    [
        ("classic", "Cổ điển", 5),
        ("bold", "Nổi bật", 5),
        ("minimal", "Tối giản", 5),
        ("story", "Kể chuyện", 5),
        ("promo", "Khuyến mãi", 5),
    ];

    /// <summary>
    /// Layout and timing parameters only — no user content and no external URLs.
    /// </summary>
    private static string BuildManifest(string key, int sceneCount) =>
        string.Create(
            CultureInfo.InvariantCulture,
            $$"""
            {"templateKey":"{{key}}","sceneCount":{{sceneCount}},"sceneSeconds":12,"safeArea":{"top":0.08,"bottom":0.12},"titleMaxChars":80}
            """);
}
