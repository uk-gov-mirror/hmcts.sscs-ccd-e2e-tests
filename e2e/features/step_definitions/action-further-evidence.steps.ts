import { When, Then } from "cucumber";
import { AnyCcdPage } from '../../pages/any-ccd.page';
import { browser } from "protractor";
import { expect } from 'chai';
import { FurtherEvidencePage } from "../../pages/further-evidence.page";
import { CaseDetailsPage } from "../../pages/case-details.page";

const anyCcdPage = new AnyCcdPage();
const furtherEvidencePage = new FurtherEvidencePage();
const caseDetailsPage = new CaseDetailsPage();

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

When('I fill the further evidence form', async function () {
    await anyCcdPage.chooseOptionContainingText("#furtherEvidenceAction", "Other document type");
    await anyCcdPage.click("Add new");
    await browser.sleep(1000);

    await anyCcdPage.chooseOptionContainingText("#scannedDocuments_0_type", "Reinstatement request");
    await furtherEvidencePage.uploadFile("scannedDocuments_0_url", "issue1.pdf");
    await furtherEvidencePage.enterFileName("scannedDocuments_0_fileName", "testfile.pdf");
    await browser.sleep(3000);

    await anyCcdPage.click('Continue');
    await anyCcdPage.click('Submit');
});

Then(/^the case should have successfully processed "(.+)" event$/, async function (event) {

    const caseReference = await anyCcdPage.getFieldValue('Case Reference');
    await anyCcdPage.get(`/case/SSCS/Benefit/${caseReference}`);

    await anyCcdPage.click('History');
    await delay(10000);
    console.log('caseReference :' + caseReference);
    expect(await caseDetailsPage.isFieldValueDisplayed('Event', event)).to.equal(true);

});