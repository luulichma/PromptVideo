# Logging and redaction policy

Every HTTP response includes `X-Correlation-ID`. A caller-supplied value is reused only when it is 1–64 characters from `A-Z`, `a-z`, `0-9`, `.`, `_`, or `-`; otherwise the API creates a new identifier.

Application logs may contain route templates, status codes, timings, stable entity identifiers, and the correlation ID. They must never contain passwords, authorization or cookie headers, antiforgery tokens, connection strings, payment secrets, full project JSON, uploaded image bytes, or user-supplied image filenames. Request/response body logging is disabled. New structured log properties must be reviewed against this list.

The same rule governs the business audit trail and the admin metrics endpoint.
`AuditService.Record` accepts an action, a subject type, a subject identifier, and
an actor id — there is deliberately no free-form payload parameter, so content
cannot leak in by accident. Export reservations are audited by their own row id,
never by the caller-supplied idempotency key, which is opaque client data.
`GET /api/admin/metrics` returns counts and timestamps only. `LoggingRedactionTests`
and `TemplateAndAdminTests` enforce both rules.
