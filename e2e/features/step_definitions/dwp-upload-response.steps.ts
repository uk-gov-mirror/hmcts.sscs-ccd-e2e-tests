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
    if (action === 'Upload response' || action === 'Write adjournment notice'
    || action === 'Request time extension' || action === 'Not listable'
    || action === 'Death of appellant' || action === 'Update not listable'
    || action === 'Update subscription') {
        await anyCcdPage.reloadPage();
    }
    await caseDetailsPage.doNextStep(action);

    await anyCcdPage.click('Go');
    expect(await anyCcdPage.pageHeadingContains(action)).to.equal(true);
});

When(/^I upload contains further information (.+) for "(.+)"$/, async function (action: string, benefitCode: string) {
    const dwpState = 'YES';
    await dwpresponse.uploadResponse(action, dwpState);
    if (benefitCode !== 'UC') {
        await anyCcdPage.selectIssueCode();
        await browser.sleep(2000);
    }
    await browser.sleep(500);
    await anyCcdPage.click('Continue');
    await browser.sleep(500);
    if (benefitCode === 'UC') {
      await anyCcdPage.clickElementById('elementsDisputedList-general');
      await anyCcdPage.click('Continue');
      await browser.sleep(500);
      await anyCcdPage.addNewCollectionItem('General');
      await anyCcdPage.selectGeneralIssueCode();
      await anyCcdPage.click('Continue');
      await browser.sleep(500);
      await anyCcdPage.clickElementById('elementsDisputedIsDecisionDisputedByOthers-No');
      await anyCcdPage.click('Continue');
      await browser.sleep(500);
      await anyCcdPage.clickElementById('jointParty-No');
      await anyCcdPage.click('Continue');
      await browser.sleep(500);
    }
    await anyCcdPage.click('Submit');
    await browser.sleep(500);
    await anyCcdPage.click('Summary');
});

When(/^I upload UC further information with disputed (.+) disputed by others (.+) and further info (.+)$/,
    async function (disputed, disputedByOthersYesOrNo, dwpFurtherInfoYesOrNo) {
    await dwpresponse.uploadResponseWithJointParty(disputed, disputedByOthersYesOrNo, dwpFurtherInfoYesOrNo);
});

Then(/^the case should end in "(.+)" state$/, async function (state) {
    await anyCcdPage.click('History');
    await anyCcdPage.reloadPage();
    await browser.sleep(10000);
    expect(await caseDetailsPage.isFieldValueDisplayed('End state', state)).to.equal(true);
    await browser.sleep(500);
});

Then(/^the case should be in "(.+)" appeal status$/, async function (state) {
    await browser.sleep(1000);
    await anyCcdPage.click('Summary');
    await anyCcdPage.reloadPage();
    expect(await anyCcdPage.contentContains(state)).to.equal(true);

    await browser.sleep(500);
});
