$ErrorActionPreference = "Stop"

Write-Host "=== SHIV GURUKUL FINAL REPAIR ===" -ForegroundColor Cyan

$root = Get-Location
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"

# Backups
foreach ($file in @(
    ".\tsconfig.json",
    ".\src\app\page.tsx",
    ".\src\app\academics\page.tsx"
)) {
    if (Test-Path $file) {
        Copy-Item $file "$file.backup-$stamp" -Force
    }
}

# The clean files are already in the correct locations after extracting this ZIP.
# Remove the broken SocialLinks dependency everywhere.
Get-ChildItem ".\src\app" -Recurse -File -Include *.tsx,*.ts | ForEach-Object {
    $p = $_.FullName
    $c = [System.IO.File]::ReadAllText($p)
    $c = $c -replace '(?m)^import SocialLinks from "@/components/SocialLinks";\r?\n?', ''
    $c = $c -replace '(?m)^\s*<SocialLinks\s*/>\r?\n?', ''
    [System.IO.File]::WriteAllText($p, $c, [System.Text.UTF8Encoding]::new($false))
}

if (Test-Path ".\components\SocialLinks.tsx") {
    Remove-Item ".\components\SocialLinks.tsx" -Force
}

# Remove Next cache.
if (Test-Path ".\.next") {
    Remove-Item ".\.next" -Recurse -Force
}

# Verify tsconfig as strict JSON.
Get-Content ".\tsconfig.json" -Raw | ConvertFrom-Json | Out-Null

Write-Host ""
Write-Host "TSCONFIG: OK" -ForegroundColor Green
Write-Host "SOCIAL LINKS: REMOVED" -ForegroundColor Green
Write-Host "NEXT CACHE: CLEARED" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host "FINAL REPAIR COMPLETE" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "Now run:" -ForegroundColor Yellow
Write-Host 'npm run dev -- -H 0.0.0.0' -ForegroundColor White
