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
    await import('./infra/core');
    await import('./infra/web');
  },
});
