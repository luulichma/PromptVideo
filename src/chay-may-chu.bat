@echo off
rem Bat co so du lieu va may chu PromptVideo (http://localhost:5080).
rem Cac gia tri trong .env duoc nap vao may chu; muon co tai khoan quan tri
rem thi dat Database__SeedDevelopmentUser=true trong .env.
rem (Khong dau vi cmd doc sai chu co dau trong file .bat.)
cd /d "%~dp0"

if not exist .env copy .env.example .env >nul

echo Dang bat co so du lieu...
docker compose up -d postgres
if errorlevel 1 (
  echo.
  echo Khong bat duoc co so du lieu. Hay mo Docker Desktop roi chay lai file nay.
  pause
  exit /b 1
)

for /f "usebackq eol=# tokens=1,* delims==" %%a in (".env") do set "%%a=%%b"

echo Dang bat may chu. Dong cua so nay de tat.
dotnet run --project backend\PromptVideo.Api -- --Database:ApplyMigrationsOnStartup=true
pause
