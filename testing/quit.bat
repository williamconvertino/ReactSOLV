start "server_shell" npm run stop-client
start "server_shell" npm run stop-server
timeout /T 3
taskkill -FI "WINDOWTITLE eq server_shell"