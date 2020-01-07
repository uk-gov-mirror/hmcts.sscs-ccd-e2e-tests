import { AnyCcdPage } from '../../pages/any-ccd.page';
import { CaseDetailsPage } from '../../pages/case-details.page';
import { Then, When } from 'cucumber';
import { expect } from 'chai';
import { DwpResponsePage } from '../../pages/dwpresponse.page';

const anyCcdPage = new AnyCcdPage();
const caseDetailsPage = new CaseDetailsPage();
const dwpresponse = new DwpResponsePage();

When(/^I choose "(.+)"$/, async function (action) {
    await anyCcdPage.reloadPage();
    await caseDetailsPage.doNextStep(action);

    await anyCcdPage.click('Go');
    expect(await anyCcdPage.pageHeadingContains('Upload response')).to.equal(true);

    await dwpresponse.uploadResponse();

    await anyCcdPage.click('Continue');
    expect(await anyCcdPage.pageHeadingContains('Upload response')).to.equal(true);
    await anyCcdPage.click('Submit');
    expect(await anyCcdPage.pageHeadingContains('History')).to.equal(true);
});

Then(/^the case should end "(.+)" state$/, async function (state) {
    await anyCcdPage.click('History');
    expect(await caseDetailsPage.isFieldValueDisplayed('End state', state)).to.equal(true);
});
