
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'vesnathan',
  applicationName: 'portfolio',
  appUid: 'xL1XZ0pmCBT4hG0wcp',
  orgUid: '1148429b-dd9f-46a8-a186-9e9ba192d45e',
  deploymentUid: 'b254ffc9-7f11-478e-867a-01b0908e9342',
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

const handlerWrapperArgs = { functionName: 'portfolio-dev-graphql', timeout: 6 };

try {
  const userHandler = require('./backend/handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.server, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}