import { Given, When } from "cucumber";
import * as ccd  from "../../helpers/ccd";
import { browser, $, ExpectedConditions } from "protractor";
import { Wait } from "../../enums/wait";
// import { AnyCcdPage } from '../../pages/any-ccd.page';

const serviceConfig = require('../../service.conf');
// const anyCcdPage = new AnyCcdPage();
let caseId;

Given('I preset up a test case', async function () {

    const ccdCreatedCase = await ccd.createCase('oral');
    caseId = ccdCreatedCase.id;
    console.log(`case id is ######## ${caseId}`);
});

When('I navigate to the case', async function () {
    browser.driver.get(`${serviceConfig.CcdWebUrl}/v2/case/${caseId}`);
    await browser.driver.wait(
        ExpectedConditions.visibilityOf($('div.form-group')),
        Wait.normal,
        'IDAM Sign In page did not load in time'
    );

});