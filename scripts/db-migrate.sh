#!/bin/bash

# Get stage from environment or default to dev
STAGE=${SST_STAGE:-dev}

echo "Running database migration for stage: $STAGE"

# Get secrets from SST for the current stage
DATABASE_URL=$(npx sst secret list --stage $STAGE | grep "DatabaseUrl=" | cut -d'=' -f2-)
BETTER_AUTH_SECRET=$(npx sst secret list --stage $STAGE | grep "BetterAuthSecret=" | cut -d'=' -f2-)

if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL not found for stage $STAGE"
  echo "Make sure you have set the secrets:"
  echo "npx sst secret set DatabaseUrl \"your-db-url\" --stage $STAGE"
  exit 1
fi

export DATABASE_URL
export BETTER_AUTH_SECRET

cd packages/database

if [ "$STAGE" = "production" ]; then
  echo "Running production-safe migration..."
  npx prisma migrate deploy
else
  echo "Running development migration..."
  npx prisma migrate dev
fi
