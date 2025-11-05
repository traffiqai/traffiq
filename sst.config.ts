/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'traffiq',
      providers: {
        aws: {
          region: 'us-east-1',
          profile:
            input.stage === 'production' ? 'traffiq-prod' : 'traffiq-dev',
        },
      },
      home: 'aws',
    };
  },
  async run() {
    // Import core infrastructure to get secrets
    const { databaseUrl, betterAuthSecret } = await import('./infra/core');

    // Run database operations before deployment
    console.log(
      `Running pre-deploy database operations for stage: ${$app.stage}`
    );

    if ($app.stage === 'production') {
      // Production: Use migrate deploy (safe for production)
      console.log('Running production database migrations...');
      await $util.command('cd packages/database && npx prisma migrate deploy', {
        env: {
          DATABASE_URL: databaseUrl.value,
          BETTER_AUTH_SECRET: betterAuthSecret.value,
        },
      });
    } else {
      // Development/Staging: Use db push (allows schema changes)
      console.log('Pushing database schema changes...');
      await $util.command('cd packages/database && npx prisma db push', {
        env: {
          DATABASE_URL: databaseUrl.value,
          BETTER_AUTH_SECRET: betterAuthSecret.value,
        },
      });
    }

    // Generate Prisma client
    await $util.command('cd packages/database && npx prisma generate');

    // Import web infrastructure
    await import('./infra/web');
  },
});
