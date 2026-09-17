using Npgsql;
using Testcontainers.PostgreSql;

namespace PromptVideo.Api.Tests;

/// <summary>
/// Starts one throwaway PostgreSQL container for the whole integration suite and
/// hands each test class its own freshly created database inside it. Tests never
/// touch the developer's compose database, and one test's rows can never be seen
/// by another.
/// </summary>
public sealed class PostgresContainerFixture : IAsyncLifetime
{
    private readonly PostgreSqlContainer container = new PostgreSqlBuilder("postgres:18.6-alpine3.23")
        .WithDatabase("promptvideo_test")
        .WithUsername("promptvideo")
        .WithPassword("promptvideo_test")
        .Build();

    public Task InitializeAsync() => container.StartAsync();

    public Task DisposeAsync() => container.DisposeAsync().AsTask();

    /// <summary>Creates an empty database and returns a connection string for it.</summary>
    public async Task<string> CreateDatabaseAsync()
    {
        var name = $"pv_{Guid.NewGuid():N}";
        await using (var connection = new NpgsqlConnection(container.GetConnectionString()))
        {
            await connection.OpenAsync();
            await using var command = connection.CreateCommand();
            // The name is a generated GUID, so there is no interpolation risk, and
            // CREATE DATABASE cannot be parameterised.
            command.CommandText = $"CREATE DATABASE \"{name}\"";
            await command.ExecuteNonQueryAsync();
        }

        return new NpgsqlConnectionStringBuilder(container.GetConnectionString())
        {
            Database = name,
        }.ConnectionString;
    }
}

[CollectionDefinition(Name)]
public sealed class PostgresSuite : ICollectionFixture<PostgresContainerFixture>
{
    public const string Name = "postgres";
}
