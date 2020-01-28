module.exports = {
  CcdGatewayUrl: process.env.TEST_E2E_URL_GATEWAY || 'https://gateway-ccd.aat.platform.hmcts.net',
  CcdWebUrl: process.env.TEST_E2E_URL_WEB || 'https://www-ccd.aat.platform.hmcts.net',
  UseHeadlessBrowser: process.env.TEST_E2E_HEADLESS !== 'false',
 
  TestCaseOfficerUserName: process.env.TEST_CASEOFFICER_USERNAME || '',
  TestCaseOfficerPassword: process.env.TEST_CASEOFFICER_PASSWORD || '',
  //CcdGatewayUrl: process.env.TEST_E2E_URL_GATEWAY || 'http://localhost:3453',
  //CcdWebUrl: process.env.TEST_E2E_URL_WEB ||  'http://localhost:3451',

  NightlyTag: process.env.TEST_E2E_ANNOTATION || '--cucumberOpts.tags=@nightly-test'

};
