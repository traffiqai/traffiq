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
  },
});
