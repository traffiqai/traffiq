export const coreFunction = new sst.aws.Function('PythonFunctio', {
  handler: 'handler.main',
  runtime: 'python3.11',
  url: true,
  bundle: 'packages/functions/core',
});
