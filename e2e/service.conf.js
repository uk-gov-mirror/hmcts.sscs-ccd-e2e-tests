module.exports = {

  CcdGatewayUrl: process.env.TEST_E2E_URL_GATEWAY || 'https://gateway-ccd.nonprod.platform.hmcts.net',
  CcdWebUrl: process.env.TEST_E2E_URL_WEB || 'https://www-ccd.nonprod.platform.hmcts.net',
  UseHeadlessBrowser: process.env.TEST_E2E_HEADLESS !== 'false',
  ProxyUrl: process.env.TEST_E2E_URL_PROXY || 'http://proxyout.reform.hmcts.net:8080',
  UseProxy: process.env.TEST_E2E_USE_PROXY !== 'false',

  // TODO: the below test user details should be given default values
  TestCaseOfficerUserName: process.env.TEST_CASEOFFICER_USERNAME || '',
  TestCaseOfficerPassword: process.env.TEST_CASEOFFICER_PASSWORD || ''

};
