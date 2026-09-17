using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PromptVideo.Api.Domain;

namespace PromptVideo.Api.Infrastructure.Persistence;

public sealed class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    : IdentityDbContext<ApplicationUser, IdentityRole<Guid>, Guid>(options)
{
    public DbSet<Plan> Plans => Set<Plan>();

    public DbSet<Entitlement> Entitlements => Set<Entitlement>();

    public DbSet<Subscription> Subscriptions => Set<Subscription>();

    public DbSet<UsagePeriod> UsagePeriods => Set<UsagePeriod>();

    public DbSet<ExportReservation> ExportReservations => Set<ExportReservation>();

    public DbSet<PaymentEvent> PaymentEvents => Set<PaymentEvent>();

    public DbSet<TemplateCatalogEntry> TemplateCatalogEntries => Set<TemplateCatalogEntry>();

    public DbSet<AuditEvent> AuditEvents => Set<AuditEvent>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        ArgumentNullException.ThrowIfNull(builder);
        base.OnModelCreating(builder);

        builder.Entity<Plan>(plan =>
        {
            plan.Property(entity => entity.Code).HasMaxLength(32).IsRequired();
            plan.Property(entity => entity.Name).HasMaxLength(128).IsRequired();
            plan.Property(entity => entity.PriceVnd).HasPrecision(18, 2);
            plan.HasIndex(entity => entity.Code).IsUnique();
            plan.HasMany(entity => entity.Entitlements)
                .WithOne(entity => entity.Plan!)
                .HasForeignKey(entity => entity.PlanId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        builder.Entity<Entitlement>(entitlement =>
        {
            entitlement.Property(entity => entity.Key).HasMaxLength(64).IsRequired();
            entitlement.Property(entity => entity.Value).HasMaxLength(64).IsRequired();
            // One value per capability per plan, so a plan can never resolve two
            // conflicting answers for the same question.
            entitlement.HasIndex(entity => new { entity.PlanId, entity.Key }).IsUnique();
        });

        builder.Entity<Subscription>(subscription =>
        {
            subscription.HasIndex(entity => new { entity.UserId, entity.Status });
            subscription.HasOne(entity => entity.Plan!)
                .WithMany()
                .HasForeignKey(entity => entity.PlanId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        builder.Entity<UsagePeriod>(period =>
        {
            // One accounting row per user per month is what makes the reset rule
            // a lookup rather than a scheduled mutation.
            period.HasIndex(entity => new { entity.UserId, entity.PeriodStartUtc }).IsUnique();
            period.Property(entity => entity.Version).IsRowVersion();
        });

        builder.Entity<ExportReservation>(reservation =>
        {
            reservation.Property(entity => entity.IdempotencyKey).HasMaxLength(128).IsRequired();
            reservation.Property(entity => entity.PlanCode).HasMaxLength(32);
            // The uniqueness that makes retrying a reserve safe.
            reservation.HasIndex(entity => new { entity.UserId, entity.IdempotencyKey }).IsUnique();
            reservation.HasIndex(entity => new { entity.Status, entity.ExpiresAtUtc });
            reservation.HasOne(entity => entity.UsagePeriod!)
                .WithMany()
                .HasForeignKey(entity => entity.UsagePeriodId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        builder.Entity<PaymentEvent>(payment =>
        {
            payment.Property(entity => entity.ExternalEventId).HasMaxLength(128).IsRequired();
            payment.Property(entity => entity.Provider).HasMaxLength(64).IsRequired();
            payment.Property(entity => entity.PlanCode).HasMaxLength(32).IsRequired();
            payment.Property(entity => entity.FailureReason).HasMaxLength(256);
            payment.Property(entity => entity.AmountVnd).HasPrecision(18, 2);
            // Replaying a webhook must not grant a second entitlement.
            payment.HasIndex(entity => new { entity.Provider, entity.ExternalEventId }).IsUnique();
        });

        builder.Entity<TemplateCatalogEntry>(template =>
        {
            template.Property(entity => entity.TemplateKey).HasMaxLength(64).IsRequired();
            template.Property(entity => entity.Name).HasMaxLength(128).IsRequired();
            template.Property(entity => entity.ManifestJson).IsRequired();
            template.HasIndex(entity => entity.TemplateKey).IsUnique();
        });

        builder.Entity<AuditEvent>(audit =>
        {
            audit.Property(entity => entity.Action).HasMaxLength(64).IsRequired();
            audit.Property(entity => entity.SubjectType).HasMaxLength(64).IsRequired();
            audit.Property(entity => entity.SubjectId).HasMaxLength(128);
            audit.Property(entity => entity.CorrelationId).HasMaxLength(64);
            audit.HasIndex(entity => entity.OccurredAtUtc);
        });
    }
}
