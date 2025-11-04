export const coreFunction = new sst.aws.Function('TypeScriptFunction', {
  handler: 'packages/functions/core/src/handler.main',
  runtime: 'nodejs20.x',
  url: true,
  timeout: '30 seconds',
  memory: '128 MB',
});
