import { AnyCcdFormPage } from '../../pages/any-ccd-form.page';
import { CaseDetailsPage } from '../../pages/case-details.page';
import { Then, When } from 'cucumber';
import { expect } from 'chai';
import { DwpResponsePage } from '../../pages/dwpresponse.page';
import { browser } from 'protractor';

const anyCcdPage = new AnyCcdFormPage();
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
    const dwpState = 'YES';
    await dwpresponse.uploadResponse(action, dwpState);
    await anyCcdPage.selectIssueCode();
    await anyCcdPage.click('Continue');
    await anyCcdPage.click('Submit');
});

When(/^I upload UC further information with disputed (.+) disputed by others (.+) and further info (.+)$/,
    async function (disputed, disputedByOthersYesOrNo, dwpFurtherInfoYesOrNo) {
    await dwpresponse.uploadResponseWithJointParty(disputed, disputedByOthersYesOrNo, dwpFurtherInfoYesOrNo);
});

Then(/^the case should end "(.+)" state$/, async function (state) {
    await anyCcdPage.click('History');
    await anyCcdPage.reloadPage();
    await browser.sleep(10000);
    expect(await caseDetailsPage.isFieldValueDisplayed('End state', state)).to.equal(true);
    await browser.sleep(500);
});

Then(/^the case should be in "(.+)" appeal status$/, async function (state) {
    await browser.sleep(500);
    await anyCcdPage.reloadPage();
    expect(await anyCcdPage.contentContains(state)).to.equal(true);

    await browser.sleep(500);
});
