// No imports needed - using environment variables directly

const ROOT_ACCOUNT_ID = '445433762579';
const HOSTED_ZONE_ID = 'Z02407552AR5N3KQFKA1W';

if ($app.stage === 'production') {
  // Add inline policy to existing role
  new aws.iam.RolePolicy('Route53AssumeRolePolicy', {
    role: 'SSTExecutionRole',
    policy: {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Action: 'sts:AssumeRole',
          Resource: `arn:aws:iam::${ROOT_ACCOUNT_ID}:role/TraffiqDNSAssumeRole`,
        },
      ],
    },
  });
}

export const router = new sst.aws.Router('Router', {});

export const landing = new sst.aws.Nextjs('Landing', {
  router: {
    instance: router,
    path: '/',
  },
  path: 'packages/landing',
  domain:
    $app.stage === 'production'
      ? {
          name: 'gettraffiq.com',
          dns: sst.aws.dns({
            zone: HOSTED_ZONE_ID,
          }),
        }
      : undefined,
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
