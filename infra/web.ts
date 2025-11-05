// No imports needed - using environment variables directly

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
    DATABASE_URL: process.env.DATABASE_URL!,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET!,
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
});
