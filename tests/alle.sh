#!/usr/bin/env bash
# Startet den lokalen Testserver, laesst alle Tests laufen, raeumt wieder auf.
#
#   bash tests/alle.sh
#
# Der Server wird nur fuer die Testdauer gestartet und danach wieder beendet.
# Laeuft schon einer auf dem Port, wird er benutzt und am Ende nicht angefasst.

set -u

HIER="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJEKT="$(dirname "$HIER")"
PORT="${VAMOS_PORT:-8765}"
export VAMOS_URL="${VAMOS_URL:-http://localhost:$PORT/index.html}"

SERVER_PID=""
aufraeumen() { [ -n "$SERVER_PID" ] && kill "$SERVER_PID" 2>/dev/null; }
trap aufraeumen EXIT

if curl -s -o /dev/null "http://localhost:$PORT/index.html"; then
  echo "Server auf Port $PORT laeuft bereits — wird mitbenutzt."
else
  echo "Starte Testserver auf Port $PORT ..."
  # exec ist wichtig: ohne exec ist $! die Nummer der Subshell und nicht die
  # des Servers — der liefe dann nach dem Aufraeumen weiter.
  ( cd "$PROJEKT" && exec python3 -m http.server "$PORT" >/dev/null 2>&1 ) &
  SERVER_PID=$!
  for _ in $(seq 1 30); do
    curl -s -o /dev/null "http://localhost:$PORT/index.html" && break
    sleep 0.3
  done
fi

ROT=0
for TEST in "$HIER"/0*.js; do
  NAME="$(basename "$TEST")"
  echo
  echo "=============================================================="
  echo "  $NAME"
  echo "=============================================================="
  if node "$TEST"; then
    echo "  [bestanden] $NAME"
  else
    echo "  [FEHLGESCHLAGEN] $NAME"
    ROT=$((ROT + 1))
  fi
done

echo
echo "=============================================================="
if [ "$ROT" -eq 0 ]; then
  echo "  Alle Tests bestanden."
else
  echo "  $ROT Test(s) fehlgeschlagen."
fi
echo "=============================================================="
exit "$ROT"
