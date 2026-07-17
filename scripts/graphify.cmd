@echo off
setlocal
set "GRAPHIFY=%~dp0..\.tools\graphify\Scripts\graphify.exe"

if not exist "%GRAPHIFY%" (
  echo Graphify ist nicht installiert. Erwartet wird .tools\graphify\Scripts\graphify.exe. 1>&2
  exit /b 1
)

"%GRAPHIFY%" %*
exit /b %ERRORLEVEL%
