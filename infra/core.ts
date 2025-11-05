// Create secrets for sensitive data
export const databaseUrl = new sst.Secret('DatabaseUrl');
export const betterAuthSecret = new sst.Secret('BetterAuthSecret');

// DevCommand for Prisma operations with environment variables
export const prismaCommand = new sst.x.DevCommand('Prisma', {
  environment: {
    DATABASE_URL: databaseUrl.value,
    BETTER_AUTH_SECRET: betterAuthSecret.value,
  },
  dev: {
    autostart: false,
    command:
      'npx prisma studio --schema packages/database/prisma/schema.prisma',
  },
});

export const coreFunction = new sst.aws.Function('TypeScriptFunction', {
  handler: 'packages/functions/core/src/handler.main',
  runtime: 'nodejs20.x',
  timeout: '30 seconds',
  memory: '128 MB',
  environment: {
    DATABASE_URL: databaseUrl.value,
    BETTER_AUTH_SECRET: betterAuthSecret.value,
  },
  link: [databaseUrl, betterAuthSecret],
});
