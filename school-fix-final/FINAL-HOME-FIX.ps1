$ErrorActionPreference = "Stop"
$fixDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = Split-Path -Parent $fixDir
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"

Write-Host "=== SHIV GURUKUL HOME FINAL FIX ===" -ForegroundColor Cyan
Write-Host "Project: $root" -ForegroundColor Gray

foreach ($file in @("$root\src\app\page.tsx", "$root\tsconfig.json")) {
    if (Test-Path $file) {
        Copy-Item $file "$file.backup-$stamp" -Force
        Write-Host "Backup created: $file" -ForegroundColor DarkGray
    }
}

Copy-Item "$fixDir\page-final-fixed.tsx" "$root\src\app\page.tsx" -Force
Copy-Item "$fixDir\tsconfig-final.json" "$root\tsconfig.json" -Force

if (Test-Path "$root\.next") { Remove-Item "$root\.next" -Recurse -Force }

Get-Content "$root\tsconfig.json" -Raw | ConvertFrom-Json | Out-Null

Write-Host "" 
Write-Host "HOME: FIXED" -ForegroundColor Green
Write-Host "TSCONFIG: CLEAN JSON" -ForegroundColor Green
Write-Host "SOCIAL: INSTAGRAM + YOUTUBE ADDED" -ForegroundColor Green
Write-Host "NEXT CACHE: CLEARED" -ForegroundColor Green
Write-Host "" 
Set-Location $root
Write-Host "Now run:" -ForegroundColor Yellow
Write-Host "npm run dev -- -H 0.0.0.0" -ForegroundColor White
