import { AnyCcdPage } from '../../pages/any-ccd.page';
import { AnyCcdFormPage } from '../../pages/any-ccd-form.page';
import { CaseDetailsPage } from '../../pages/case-details.page';
import { NIGenerator } from '../../helpers/ni-generator';
import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { browser } from 'protractor';

const anyCcdPage = new AnyCcdPage();
const anyCcdFormPage = new AnyCcdFormPage();
const caseDetailsPage = new CaseDetailsPage();
const {formData} = require('../data/scanned-case');
const niGenerator = new NIGenerator();

async function addDataItems() {
    for (let i = 0; i < formData.length; i++) {
        if (formData[i].question === 'person1_nino' ) {
            formData[i].answer = niGenerator.myNIYearPrefix() + niGenerator.myNIMonthPrefix() + niGenerator.myNINumberFromDay() + 'A';
        }
        if (formData[i].question === 'person2_nino' ) {
            formData[i].answer = niGenerator.myNIYearPrefix() + niGenerator.myNIMonthPrefix() + niGenerator.myNINumberFromDay() + 'B';
        }

        await anyCcdFormPage.addNewCollectionItem('Form OCR Data (Optional)');
        await anyCcdFormPage.setCollectionItemFieldValue(
            'Form OCR Data',
            i + 1,
            'Key (Optional)',
            formData[i].question
        );
        await anyCcdFormPage.setCollectionItemFieldValue(
            'Form OCR Data',
            i + 1,
            'Value (Optional)',
            formData[i].answer
        );
    }

}

async function checkDataItems() {
    for (let i = 0; i < formData.length; i++) {
        expect(
            await caseDetailsPage.isCollectionItemFieldValueDisplayed(
            'Form OCR Data',
            i + 1,
            'Key',
            formData[i].question
            )
        ).to.equal(true);
    }
}

Given(/^I have a bulk-scanned document with (?:all fields)$/, {timeout: 600 * 1000}, async function () {
    await anyCcdPage.click('Create new case');
    expect(await anyCcdPage.pageHeadingContains('Create Case')).to.equal(true);
    await anyCcdFormPage.setCreateCaseFieldValue('Case type', 'SSCS Bulkscanning');
    await anyCcdPage.click('Start');
    expect(await anyCcdPage.pageHeadingContains('Envelope meta data')).to.equal(true);

    await caseDetailsPage.addEnvelopeDataItems('NEW_APPLICATION', '123456', 'test_po-box-jurisdiction', 'test_envelope');
    await caseDetailsPage.addDateItems('deliveryDate');
    await caseDetailsPage.addDateItems('openingDate');

    await addDataItems();
    await caseDetailsPage.addFormType('test_form_type');

    await anyCcdPage.click('Continue');
    await anyCcdPage.click('Submit');
    expect(await caseDetailsPage.alertContains('has been created')).to.equal(true);
    expect(await caseDetailsPage.isFieldValueDisplayed(
        'Event',
        'Create an exception record'
    )).to.equal(true);

    await anyCcdPage.click('Form OCR');
    await checkDataItems()
});

When(/^I choose the next step "(.+)"$/, async function (action) {
    switch (action) {
        case 'Create new case from exception':
            await caseDetailsPage.doNextStep(action);
            break;
        case 'Create a bundle':
            await caseDetailsPage.doNextStep(action);
            break;
        default:
            throw new Error(
                `Do not understand action "${action}"`
            );
    }

    await anyCcdPage.click('Go');
    expect(await anyCcdPage.pageHeadingContains(action)).to.equal(true);

    if (action === 'Create new case from exception') {
        await anyCcdPage.click('Continue');
        expect(await anyCcdPage.pageHeadingContains('Create new case from exception')).to.equal(true);
    }
    await anyCcdPage.click('Submit');

    expect(await anyCcdPage.pageHeadingContains('History')).to.equal(true);
});

Then(/^the case should be in "(.+)" state$/, async function (state) {
    await anyCcdPage.click('Envelope');
    expect(await anyCcdPage.pageHeadingContains('Envelope meta data')).to.equal(true);

    const caseReference = await anyCcdPage.getFieldValue('Case Reference');
    await anyCcdPage.get(`/case/SSCS/Benefit/${caseReference}`);

    await anyCcdPage.click('History');
    console.log('caseReference :' + caseReference);
    expect(await caseDetailsPage.isFieldValueDisplayed('End state', state)).to.equal(true);

});

Then(/^the bundles should be successfully listed in "(.+)" tab$/, async function (tabName) {
    await caseDetailsPage.reloadPage();
    await anyCcdPage.click(tabName);
    expect(await caseDetailsPage.eventsPresentInHistory('Stitching bundle complete')).to.equal(true);
    expect(await caseDetailsPage.eventsPresentInHistory('Create a bundle')).to.equal(true);
    await browser.sleep(500);
});

Then(/^the case bundle details should be listed in "(.+)" tab$/, async function (tabName) {
    await anyCcdPage.click(tabName);
    expect(await caseDetailsPage.isFieldValueDisplayed('Stitch status', 'DONE')).to.equal(true);
    expect(await caseDetailsPage.isFieldValueDisplayed('Config used for bundle', 'SSCS Bundle')).to.equal(true);
});
