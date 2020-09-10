import { AnyCcdPage } from '../../pages/any-ccd.page';
import { CaseDetailsPage } from '../../pages/case-details.page';
import { Then, When } from 'cucumber';
import { expect } from 'chai';
import { DwpResponsePage } from '../../pages/dwpresponse.page';
import { browser } from 'protractor';

const anyCcdPage = new AnyCcdPage();
const caseDetailsPage = new CaseDetailsPage();
const dwpresponse = new DwpResponsePage();

When(/^I choose "(.+)"$/, async function (action) {
    if (action === 'Upload response') {
        await anyCcdPage.reloadPage();
    }
    await caseDetailsPage.doNextStep(action);

    await anyCcdPage.click('Go');
    expect(await anyCcdPage.pageHeadingContains(action)).to.equal(true);
});

When(/^I upload contains further information "(.+)"$/, async function (action) {
    await dwpresponse.uploadResponse(action);
    await anyCcdPage.selectIssueCode();
    await anyCcdPage.click('Continue');
    await anyCcdPage.click('Submit');
    expect(await anyCcdPage.pageHeadingContains('History')).to.equal(true);
});

Then(/^the case should end "(.+)" state$/, async function (state) {
    await anyCcdPage.click('History');
    await browser.sleep(1500);
    expect(await caseDetailsPage.isFieldValueDisplayed('End state', state)).to.equal(true);
    await browser.sleep(500);
});
