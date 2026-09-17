$ErrorActionPreference = 'Stop'

Push-Location $PSScriptRoot/..
try {
    dotnet build backend/PromptVideo.Api/PromptVideo.Api.csproj
    Push-Location frontend
    try {
        npm run generate:api
    }
    finally {
        Pop-Location
    }
}
finally {
    Pop-Location
}
