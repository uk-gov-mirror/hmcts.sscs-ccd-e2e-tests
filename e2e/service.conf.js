module.exports = {
  CcdGatewayUrl: process.env.TEST_E2E_URL_GATEWAY || 'https://gateway-ccd.aat.platform.hmcts.net',
  CcdWebUrl: process.env.TEST_E2E_URL_WEB || 'https://www-ccd.aat.platform.hmcts.net/list/case?jurisdiction=sscs',
  UseHeadlessBrowser: process.env.TEST_E2E_HEADLESS !== 'false',
 

  TestCaseOfficerUserName: process.env.TEST_CASEOFFICER_USERNAME || '',
  TestCaseOfficerPassword: process.env.TEST_CASEOFFICER_PASSWORD || ''

};
