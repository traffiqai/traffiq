export const web = new sst.aws.Nextjs('Web', {
  path: 'packages/web',
  environment: {
    NODE_ENV: 'production',
  },
});
