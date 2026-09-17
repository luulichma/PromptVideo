# PromptVideo application foundation

The application is a modular ASP.NET Core 10 API plus a strict React/Vite frontend. PostgreSQL stores server-owned identity and entitlement data; user video content remains in the browser.

## Prerequisites

- .NET SDK 10.0.303 or a compatible 10.0 patch
- Node.js 24 and npm 11
- Docker with Compose

## First run

```powershell
Copy-Item .env.example .env
docker compose up -d postgres
dotnet tool restore
dotnet restore PromptVideo.sln
dotnet tool run dotnet-ef database update --project backend/PromptVideo.Api --startup-project backend/PromptVideo.Api
npm ci --prefix frontend
```

In separate terminals, start the API and frontend:

```powershell
dotnet run --project backend/PromptVideo.Api
npm run dev --prefix frontend
```

Open `http://localhost:5173`. Vite proxies API, health, and OpenAPI requests to `http://localhost:5080`, preserving same-origin cookie behavior in development. The production frontend is emitted into the API's `wwwroot`, so production is same-origin as well.

The development database publishes port **55432**, not 5432, so it does not collide with a PostgreSQL service already installed on the machine. Change `POSTGRES_PORT` in `.env` to move it, and set `ConnectionStrings__Postgres` in the API process environment to match — that environment variable overrides `appsettings.json` and is how CI and production supply their own connection string.

To opt into the development-only seed, set `Database__ApplyMigrationsOnStartup=true`, `Database__SeedDevelopmentUser=true`, `Seed__AdminEmail`, and `Seed__AdminPassword` in the API process environment. Do not use seed credentials outside local development.

## Architecture boundaries

- `frontend/src/app` composes the application.
- `frontend/src/features` owns user-facing feature slices and may depend on `core` and `generated`.
- `frontend/src/core` contains browser-only domain and rendering code; it must not depend on features or app composition.
- `frontend/src/generated/api` is generated from `contracts/openapi/PromptVideo.Api.json`; do not hand-edit it.
- `backend/PromptVideo.Api/Domain` holds the entities and the plan catalog. Both modules and infrastructure depend on it; it depends on neither.
- `backend/PromptVideo.Api/Modules` owns HTTP endpoints by business capability: `Identity`, `Subscriptions`, `Exports`, `Templates`, `Admin`.
- `backend/PromptVideo.Api/Infrastructure` owns persistence, security, audit, retention, and logging adapters. Modules use these adapters through ASP.NET Core composition; infrastructure does not depend on modules.

This direction keeps dependencies flowing from composition to features/domain and prevents circular imports. The backend stays a modular monolith until a measured scaling or ownership boundary justifies another deployable.

## Contracts and quality checks

Regenerate the OpenAPI document and TypeScript client with:

```powershell
./scripts/generate-api.ps1
```

Run the same core checks used by CI with:

```powershell
./scripts/check.ps1
```

CI builds the API-generated OpenAPI document, regenerates TypeScript types, and fails if either committed contract changes. Frontend checks include Prettier, ESLint, TypeScript, Vitest, and the production PWA build. Backend warnings are errors.

Backend tests are xUnit. Plan policy and month-boundary arithmetic are pure unit
tests. Everything else is an integration test against a throwaway PostgreSQL
container started by Testcontainers, with one fresh database per test class, so
tests never touch the compose database and cannot see each other's rows. Running
them needs a working Docker daemon.

The service worker precaches only the versioned application shell. API, health, and OpenAPI paths are network-only and never enter runtime cache. See [logging-policy.md](docs/logging-policy.md) for mandatory redaction rules, which `LoggingRedactionTests` enforces.

`contracts/openapi` and `frontend/src/generated/api` are generated but committed, and `.gitattributes` pins them to LF so the drift check behaves the same on Windows and Linux. Regenerate and commit them in the same change as any endpoint edit, or CI fails.

## Business rules

Plan policy is data, not code. The three tiers live in `Domain/PlanCatalog.cs` as
capability key/value pairs, are seeded into `Plans`/`Entitlements` on every start,
and are read back through `EntitlementService`. No endpoint branches on a plan
code, so changing a quota or a resolution cap is a data change plus a redeploy.

| Tier | Exports/month | Max height | Watermark | Seats |
| --- | --- | --- | --- | --- |
| Miễn phí | 3 | 720 | yes | 1 |
| Cá nhân | unlimited | 1080 | no | 1 |
| Doanh nghiệp | unlimited | 1080 | no | 5 |

Exports follow a `reserve → complete/cancel` protocol. `reserve` takes a caller
supplied idempotency key so a retry returns the original reservation instead of
consuming a second slot, and the `UsagePeriod` row carries a PostgreSQL `xmin`
concurrency token so simultaneous reserves cannot exceed the quota. A reservation
that is never resolved expires after 30 minutes and its slot is released. Quota
resets because a new UTC calendar month means a new `UsagePeriod` row; nothing is
mutated on a schedule.

The simulated payment gateway is registered and mapped only outside Production,
and outside local development it additionally requires an administrator. Replayed
gateway events are recorded but grant nothing the second time.

Antiforgery tokens are bound to the caller's identity, so a token obtained while
anonymous stops working the moment the user signs in. Fetch a fresh token after
login; `getAntiforgeryHeaders()` in the generated client does this per request.

## Health endpoints

- `GET /api/foundation/health` is described by OpenAPI and is what the frontend calls through the generated client. It reports readiness with check names and states only; descriptions and exceptions stay server-side.
- `GET /health/live` and `GET /health/ready` are plain infrastructure probes for containers and load balancers.
