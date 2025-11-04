export const web = new sst.aws.Nextjs('Web', {
  path: 'packages/web',
  buildCommand: 'NODE_ENV=production npm run build',
  environment: {
    NODE_ENV: 'production',
  },
});
