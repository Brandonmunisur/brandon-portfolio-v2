@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)
echo Starting portfolio...
call npm run dev
if errorlevel 1 goto :error
goto :eof
:error
echo.
echo Something failed. Copy the error shown above and send it back for debugging.
pause
