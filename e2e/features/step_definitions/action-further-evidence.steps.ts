import { When, Then } from "cucumber";
import { AnyCcdPage } from '../../pages/any-ccd.page';
import { browser } from "protractor";
import { expect, assert } from 'chai';
import { FurtherEvidencePage } from "../../pages/further-evidence.page";
import { CaseDetailsPage } from "../../pages/case-details.page";

const anyCcdPage = new AnyCcdPage();
const furtherEvidencePage = new FurtherEvidencePage();
const caseDetailsPage = new CaseDetailsPage();

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

When('I fill the further evidence form', async function () {
    await anyCcdPage.chooseOptionContainingText('#furtherEvidenceAction', 'Other document type');
    await anyCcdPage.click('Add new');
    await browser.sleep(1000);

    await anyCcdPage.chooseOptionContainingText('#scannedDocuments_0_type', 'Reinstatement request');
    await furtherEvidencePage.uploadFile('scannedDocuments_0_url', 'issue1.pdf');
    await furtherEvidencePage.enterFileName('scannedDocuments_0_fileName', 'testfile.pdf');
    await browser.sleep(3000);

    await anyCcdPage.click('Continue');
    await anyCcdPage.click('Submit');
});

Then(/^the case should have successfully processed "(.+)" event$/, async function (event) {

    await anyCcdPage.click('History');
    await delay(10000);
    expect(await caseDetailsPage.isFieldValueDisplayed('Event', event)).to.equal(true);
});

When(/^I fill the direction notice form$/, async function () {

    await anyCcdPage.chooseOptionContainingText('#directionTypeDl', 'Grant reinstatement');
    await anyCcdPage.clickElementById('generateNotice-No');
    await anyCcdPage.chooseOptionContainingText('#sscsInterlocDirectionDocument_documentType', 'Directions Notice');
    await furtherEvidencePage.uploadFile('sscsInterlocDirectionDocument_documentLink', 'issue2.pdf');
    await furtherEvidencePage.enterFileName('sscsInterlocDirectionDocument_documentFileName', 'testfile.pdf');
    await browser.sleep(3000);

    await anyCcdPage.click('Continue');
    await anyCcdPage.click('Submit');
});

Then(/^the case should be "(.+)" permissions to proceed$/, async function (reinstatement) {

    const today = new Date();
    var day = today.getDate();
    var month = today.toLocaleString('default', { month: 'short' });
    var year = today.getFullYear();

    var expDate = day + ' ' + month + ' ' + year;
    await anyCcdPage.click('Appeal Details');
    await anyCcdPage.reloadPage();
    await delay(10000);
    await caseDetailsPage.getFieldValue('Reinstatement Outcome').then(function(actText){
        assert.equal(reinstatement, actText);
    });
    await caseDetailsPage.getFieldValue('Reinstatement Registered').then(function(actText){
        assert.equal(expDate, actText);
    });
});
