using System.Data.Common;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace PromptVideo.Api.Infrastructure.Persistence;

public static class DatabaseInitializer
{
    public static async Task InitializeDatabaseAsync(this WebApplication app)
    {
        ArgumentNullException.ThrowIfNull(app);

        await using var scope = app.Services.CreateAsyncScope();
        var database = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var logger = scope.ServiceProvider.GetRequiredService<ILoggerFactory>()
            .CreateLogger(typeof(DatabaseInitializer).FullName!);

        try
        {
            if (app.Configuration.GetValue<bool>("Database:ApplyMigrationsOnStartup"))
            {
                await database.Database.MigrateAsync();
            }

            // Plan policy and the template catalog are reference data, not dev-only
            // seed: the application cannot resolve entitlements without them. This
            // runs on every start, because migrations are often applied out of band
            // by `dotnet ef database update`, which does not seed.
            if (!(await database.Database.GetPendingMigrationsAsync()).Any())
            {
                await scope.ServiceProvider.GetRequiredService<ReferenceDataSeeder>().SeedAsync();
            }
            else
            {
                LogSchemaOutOfDate(logger, null);
            }

            if (app.Environment.IsDevelopment() && app.Configuration.GetValue<bool>("Database:SeedDevelopmentUser"))
            {
                await SeedDevelopmentUserAsync(scope.ServiceProvider, app.Configuration);
            }
        }
        catch (DbException exception)
        {
            // Starting without a reachable database is allowed: the readiness probe
            // reports unhealthy and an orchestrator can retry, which is better than
            // crash-looping the whole process during a database restart.
            LogDatabaseUnavailable(logger, exception);
        }
    }

    private static readonly Action<ILogger, Exception?> LogSchemaOutOfDate =
        LoggerMessage.Define(
            LogLevel.Warning,
            new EventId(1, nameof(LogSchemaOutOfDate)),
            "Pending migrations exist; skipping reference data seeding until the schema is up to date.");

    private static readonly Action<ILogger, Exception?> LogDatabaseUnavailable =
        LoggerMessage.Define(
            LogLevel.Error,
            new EventId(2, nameof(LogDatabaseUnavailable)),
            "Database initialization was skipped because the database is unavailable.");

    private static async Task SeedDevelopmentUserAsync(IServiceProvider services, IConfiguration configuration)
    {
        var email = configuration["Seed:AdminEmail"];
        var password = configuration["Seed:AdminPassword"];
        if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
        {
            throw new InvalidOperationException("Seed admin credentials are required when development seeding is enabled.");
        }

        var roleManager = services.GetRequiredService<RoleManager<IdentityRole<Guid>>>();
        var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
        if (!await roleManager.RoleExistsAsync("Admin"))
        {
            await roleManager.CreateAsync(new IdentityRole<Guid>("Admin"));
        }

        var user = await userManager.FindByEmailAsync(email);
        if (user is null)
        {
            user = new ApplicationUser { UserName = email, Email = email, EmailConfirmed = true };
            var createResult = await userManager.CreateAsync(user, password);
            if (!createResult.Succeeded)
            {
                throw new InvalidOperationException("Unable to create the development seed user.");
            }
        }

        if (!await userManager.IsInRoleAsync(user, "Admin"))
        {
            await userManager.AddToRoleAsync(user, "Admin");
        }
    }
}
