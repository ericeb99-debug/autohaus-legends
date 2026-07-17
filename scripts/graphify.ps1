param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$GraphifyArgs
)

$graphify = Join-Path $PSScriptRoot '..\.tools\graphify\Scripts\graphify.exe'
if (-not (Test-Path -LiteralPath $graphify)) {
  throw 'Graphify ist nicht installiert. Erwartet wird .tools\graphify\Scripts\graphify.exe.'
}

& $graphify @GraphifyArgs
exit $LASTEXITCODE
