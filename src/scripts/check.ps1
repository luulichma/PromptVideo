$ErrorActionPreference = 'Stop'

# Mirrors the CI pipeline: any failure here should fail there and vice versa.
Push-Location $PSScriptRoot/..
try {
    dotnet tool restore
    if ($LASTEXITCODE -ne 0) { throw 'dotnet tool restore failed.' }

    dotnet restore PromptVideo.sln
    if ($LASTEXITCODE -ne 0) { throw 'dotnet restore failed.' }

    # Building first emits contracts/openapi/PromptVideo.Api.json.
    dotnet build PromptVideo.sln --no-restore --configuration Release
    if ($LASTEXITCODE -ne 0) { throw 'Backend build failed.' }

    dotnet test PromptVideo.sln --no-restore --no-build --configuration Release
    if ($LASTEXITCODE -ne 0) { throw 'Backend tests failed.' }

    Push-Location frontend
    try {
        npm ci
        if ($LASTEXITCODE -ne 0) { throw 'npm ci failed.' }

        npm run generate:api
        if ($LASTEXITCODE -ne 0) { throw 'API client generation failed.' }

        npm run check
        if ($LASTEXITCODE -ne 0) { throw 'Frontend checks failed.' }
    }
    finally {
        Pop-Location
    }

    git add --intent-to-add -- contracts/openapi frontend/src/generated/api
    git diff --exit-code -- contracts/openapi frontend/src/generated/api
    if ($LASTEXITCODE -ne 0) {
        throw 'Generated contracts are stale. Commit the regenerated files.'
    }
}
finally {
    Pop-Location
}
