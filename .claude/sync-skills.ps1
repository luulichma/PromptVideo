<#
.SYNOPSIS
  Đồng bộ skills từ .agents/skills (do `npx skills` quản lý) sang .claude/skills
  để Claude Code / extension VSCode nạp được.

.DESCRIPTION
  Claude Code chỉ quét skill ở .claude/skills (project) và ~/.claude/skills (user).
  Trình quản lý `npx skills` lại cài vào .agents/skills. Script này copy sang.

.EXAMPLE
  pwsh .claude/sync-skills.ps1
  pwsh .claude/sync-skills.ps1 -Global   # cài vào ~/.claude/skills (dùng cho mọi project)
#>
param(
  [switch]$Global
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$src = Join-Path $repoRoot '.agents\skills'

if ($Global) {
  $dest = Join-Path $env:USERPROFILE '.claude\skills'
} else {
  $dest = Join-Path $repoRoot '.claude\skills'
}

if (-not (Test-Path $src)) { throw "Khong tim thay $src" }
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Force -Path $dest | Out-Null }

$count = 0
foreach ($skill in Get-ChildItem -Path $src -Directory) {
  if (-not (Test-Path (Join-Path $skill.FullName 'SKILL.md'))) {
    Write-Warning "Bo qua '$($skill.Name)': khong co SKILL.md"
    continue
  }
  $target = Join-Path $dest $skill.Name
  if (Test-Path $target) { Remove-Item -Recurse -Force $target }
  Copy-Item -Recurse -Path $skill.FullName -Destination $target
  Write-Host "  + $($skill.Name)"
  $count++
}

Write-Host "Da dong bo $count skill -> $dest"
Write-Host "Khoi dong lai phien Claude Code de nap skill moi."
