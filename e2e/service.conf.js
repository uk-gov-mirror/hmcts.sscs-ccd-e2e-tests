module.exports = {
  CcdGatewayUrl: process.env.TEST_E2E_URL_GATEWAY || 'https://gateway-ccd.aat.platform.hmcts.net',
  CcdWebUrl: process.env.TEST_E2E_URL_WEB || 'https://www-ccd.aat.platform.hmcts.net/list/case?jurisdiction=sscs',
  UseHeadlessBrowser: process.env.TEST_E2E_HEADLESS !== 'false',
 
  // CcdGatewayUrl: process.env.TEST_E2E_URL_GATEWAY || 'http://localhost:3453',
  // CcdWebUrl: process.env.TEST_E2E_URL_WEB ||  'http://localhost:3451',

  TestCaseOfficerUserName: process.env.TEST_CASEOFFICER_USERNAME || '',
  TestCaseOfficerPassword: process.env.TEST_CASEOFFICER_PASSWORD || '',

  TestJudgeUserName: process.env.TEST_JUDGE_USERNAME || '',
  TestJudgePassword: process.env.TEST_JUDGE_PASSWORD || '',

  TestDWPResponseWriterUserName: process.env.TEST_DWP_RESPONSE_WRITER_USERNAME || '',
  TestDWPResponseWriterPassword: process.env.TEST_DWP_RESPONSE_WRITER_PASSWORD || ''
};
