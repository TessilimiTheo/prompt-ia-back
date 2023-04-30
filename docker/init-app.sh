#!/bin/sh
[ ! -d "/app/node_modules" ] && npm install

if [ -z "${EXEC_ENV}" ]; then
  echo "Set Env = Prod"
  export  EXEC_ENV="production"
fi

if [ ${EXEC_ENV} == "production" ]; then
  echo "Env de Prod"
  npm run build
  if [ -f /app/logs/production.log ]; then
    ln -sf /dev/stderr /app/logs/production.log
  fi
  npm run start:prod
else
  echo "Env de Dev"
  if [ -f /app/logs/development.log ]; then
    ln -sf /dev/stderr /app/logs/development.log
  fi
  npm run start:dev
fi