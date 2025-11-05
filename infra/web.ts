import { databaseUrl, betterAuthSecret } from './core';

export const router = new sst.aws.Router('Router', {});

export const landing = new sst.aws.Nextjs('Landing', {
  router: {
    instance: router,
    path: '/',
  },
  path: 'packages/landing',
  environment: {
    NODE_ENV: $dev ? 'development' : 'production',
  },
});

export const dashboard = new sst.aws.Nextjs('Dashboard', {
  router: {
    instance: router,
    path: '/dashboard',
  },
  path: 'packages/dashboard',
  environment: {
    NODE_ENV: $dev ? 'development' : 'production',
    DATABASE_URL: databaseUrl.value,
    BETTER_AUTH_SECRET: betterAuthSecret.value,
    BETTER_AUTH_URL: $dev
      ? 'http://localhost:3000'
      : $interpolate`https://${router.url}/dashboard`,
    NEXT_PUBLIC_BETTER_AUTH_URL: $dev
      ? 'http://localhost:3000'
      : $interpolate`https://${router.url}/dashboard`,
    // Disable Prisma Studio in production
    PRISMA_STUDIO_ENABLED: $dev ? 'true' : 'false',
    // Add stage information for debugging
    SST_STAGE: $app.stage,
  },
  link: [databaseUrl, betterAuthSecret],
});
