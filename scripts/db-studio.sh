#!/bin/bash

# Get stage from environment or default to dev
STAGE=${SST_STAGE:-dev}

# Security check: Don't allow studio in production
if [ "$STAGE" = "production" ]; then
  echo "❌ Prisma Studio is disabled in production for security reasons"
  echo "Use a secure database management tool instead"
  exit 1
fi

echo "Opening Prisma Studio for stage: $STAGE"

# Load environment variables from .env file if it exists
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL not found"
  echo "Make sure you have:"
  echo "1. Created a .env file with DATABASE_URL"
  echo "2. Or set DATABASE_URL environment variable"
  echo "3. Or use SST environment variables"
  exit 1
fi

cd packages/database
npx prisma studio