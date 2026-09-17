namespace PromptVideo.Api.Infrastructure.Security;

public static class AuthResponseConventions
{
    /// <summary>
    /// Documents the refusals an authenticated endpoint can produce.
    ///
    /// Authorization answers 401 and 403 from middleware, so they never appear in
    /// a handler's return type and would otherwise be missing from the generated
    /// OpenAPI document. A client generated from that document cannot tell "sign
    /// in" from "the server is down", so the frontend would have to guess.
    /// </summary>
    public static TBuilder ProducesAuthFailures<TBuilder>(
        this TBuilder builder,
        bool includeForbidden = false)
        where TBuilder : IEndpointConventionBuilder
    {
        builder.ProducesProblem(StatusCodes.Status401Unauthorized);
        if (includeForbidden)
        {
            builder.ProducesProblem(StatusCodes.Status403Forbidden);
        }

        return builder;
    }
}
