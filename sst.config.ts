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
  console: {
    autodeploy: {
      target(event) {
        // main branch → dev stage
        if (event.type === 'branch' && event.branch === 'main') {
          return { stage: 'dev' };
        }

        // prod branch → production stage
        if (event.type === 'branch' && event.branch === 'prod') {
          return { stage: 'production' };
        }

        // Pull Requests → pr-{number} stages (temporary)
        if (event.type === 'pull_request') {
          return {
            stage: `pr-${event.number}`,
          };
        }

        // Other branches → Skip deployment
        return;
      },
    },
  },
  async run() {
    // Run database operations before deployment
    const { runDatabaseOperations } = await import('./sst-commands.js');
    await runDatabaseOperations($app.stage);

    // Import infrastructure
    await import('./infra/core');
    await import('./infra/web');
  },
});
