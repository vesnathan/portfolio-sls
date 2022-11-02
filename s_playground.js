
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'vesnathan',
  applicationName: 'portfolio',
  appUid: 'xL1XZ0pmCBT4hG0wcp',
  orgUid: '1148429b-dd9f-46a8-a186-9e9ba192d45e',
  deploymentUid: 'aa9699e9-4f7a-4474-b1b9-71f167a63499',
  serviceName: 'portfolio',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.2',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'portfolio-dev-playground', timeout: 6 };

try {
  const userHandler = require('./backend/handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.playground, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}