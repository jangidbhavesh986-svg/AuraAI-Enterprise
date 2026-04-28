@echo off
echo Starting AuraAI Local Server...
:: Using 'start' to run python in a new window/background
start "AuraAI Server" /min python -m http.server 5000
echo.
echo Connecting to Public Tunnel (localhost.run)...
echo.
echo Copy the HTTPS URL from the output below:
echo.
ssh -o StrictHostKeyChecking=no -R 80:localhost:5000 nokey@localhost.run

