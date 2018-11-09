import { AnyCcdPage } from '../../pages/any-ccd.page';
import { AnyCcdFormPage } from '../../pages/any-ccd-form.page';
import { CaseDetailsPage } from '../../pages/case-details.page';
import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';

const anyCcdPage = new AnyCcdPage();
const anyCcdFormPage = new AnyCcdFormPage();
const caseDetailsPage = new CaseDetailsPage();
const {formData} = require('../data/scanned-case');

async function addDataItems() {
    for (let i = 0; i < formData.length; i++) {
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

Given(/^I have a bulk-scanned document with (?:all mandatory fields)$/, {timeout: 60 * 1000}, async function () {
    await anyCcdPage.click('Create new case');
    expect(await anyCcdPage.pageHeadingContains('Create Case')).to.equal(true);
    await anyCcdFormPage.setCreateCaseFieldValue('Case type', 'SSCS Bulkscanning v1.0.1_AAT');
    await anyCcdPage.click('Start');
    expect(await anyCcdPage.pageHeadingContains('Envelope meta data')).to.equal(true);

    await addDataItems();

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
        default:
            throw new Error(
                `Do not understand action "${action}"`
            );
    }

    await anyCcdPage.click('Go');
    expect(await anyCcdPage.pageHeadingContains(action)).to.equal(true);

    await anyCcdPage.click('Continue');
    expect(await anyCcdPage.pageHeadingContains('Create new case from exception')).to.equal(true);

    await anyCcdPage.click('Submit');
    expect(await anyCcdPage.pageHeadingContains('History')).to.equal(true);
});

Then(/^the case should be in "(.+)" state$/, async function (state) {
    await caseDetailsPage.isFieldValueDisplayed('Event', state);
});
