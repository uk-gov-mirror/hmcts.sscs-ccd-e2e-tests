import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import * as path from 'path';
import { AnyCcdFormPage } from './any-ccd-form.page';
import { NIGenerator } from '../helpers/ni-generator';

const anyCcdFormPage = new AnyCcdFormPage();
const niGenerator = new NIGenerator();
export class DwpResponsePage extends AnyPage {

    async uploadResponse(action: string, dwpState: string) {
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile('dwpResponseDocument_documentLink', 'issue1.pdf');
        await this.uploadFile('dwpAT38Document_documentLink', 'issue2.pdf');
        await this.uploadFile('dwpEvidenceBundleDocument_documentLink', 'issue3.pdf');
        if (action === 'YES') {
            await browser.sleep(10000);
            await anyCcdFormPage.clickElementById('dwpFurtherInfo-Yes');
        } else {
            await browser.sleep(10000);
            await anyCcdFormPage.clickElementById('dwpFurtherInfo-No');
        }
        if (dwpState === 'YES') {
            anyCcdFormPage.chooseOptionByElementId('dwpState', 'Response submitted (DWP)');
        }
    }

   async uploadResponseWithUcbAndPhme(dwpState: string, docLink: string, isUCB: boolean, isPHME: boolean, containsFurtherInfo) {
            await browser.waitForAngular();
            let remote = require('selenium-webdriver/remote');
            browser.setFileDetector(new remote.FileDetector());
            await this.uploadFile('dwpResponseDocument_documentLink', 'issue1.pdf');
            await this.uploadFile('dwpAT38Document_documentLink', 'issue2.pdf');
            await this.uploadFile('dwpEvidenceBundleDocument_documentLink', 'issue3.pdf');
            if (isUCB) {
                 await browser.sleep(1000);
                 await anyCcdFormPage.clickElementById('dwpUCB-Yes');
                 console.log('uploading ucb doc....')
                 await this.uploadFile(docLink, 'issue3.pdf');
                 await browser.sleep(10000);
            }

            if (isPHME) {
                await browser.sleep(1000);
                anyCcdFormPage.chooseOptionByElementId('dwpEditedEvidenceReason', 'Potentially harmful medical evidence');
                console.log('uploading edited doc....');
                await this.uploadFile('dwpEditedResponseDocument_documentLink', 'issue1.pdf');
                await this.uploadFile('dwpEditedEvidenceBundleDocument_documentLink', 'issue2.pdf');
                await this.uploadFile('appendix12Doc_documentLink', 'issue3.pdf');
            }

            if (containsFurtherInfo) {
                await anyCcdFormPage.clickElementById('dwpFurtherInfo-Yes');
                await browser.sleep(1000);
            } else {
                await browser.sleep(1000);
                await anyCcdFormPage.clickElementById('dwpFurtherInfo-No');
            }
            if (dwpState === 'YES') {
                anyCcdFormPage.chooseOptionByElementId('dwpState', 'Response submitted (DWP)');
            }
        }

    async uploadDoc(docLink: string) {
      console.log('uploading a single doc...')
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile(docLink, 'issue1.pdf');
        await browser.sleep(100);

    }

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }

    async uploadResponseWithJointParty(disputed: string, disputedByOthersYesOrNo: string, dwpFurtherInfoYesOrNo: string) {
        const dwpState = 'NO';
        await this.uploadResponse(dwpFurtherInfoYesOrNo.toUpperCase(), dwpState);
        await anyCcdFormPage.click('Continue');
        await this.elementsDisputedPage(disputed)
        await anyCcdFormPage.click('Continue');
        await this.issueCodePage(disputed);
        await anyCcdFormPage.click('Continue');
        await this.disputedPage(disputedByOthersYesOrNo, 'reference');
        await anyCcdFormPage.click('Continue');
        await this.jointParty('Yes');
        await anyCcdFormPage.click('Continue');
        await this.jointPartyName();
        await anyCcdFormPage.click('Continue');
        await this.jointPartyIdentityDetails();
        await anyCcdFormPage.click('Continue');
        await this.jointPartyAddress('Yes');
        await anyCcdFormPage.click('Continue');
        // Check your Answers
        await anyCcdFormPage.click('Submit');
    }

    async elementsDisputedPage(disputed: string) {
        await browser.sleep(500);
        await anyCcdFormPage.clickElementById('elementsDisputedList-' + disputed.toLowerCase());
    }

    async issueCodePage(disputed: string) {
        await anyCcdFormPage.addNewCollectionItem(disputed);
        await browser.sleep(1000);
        await anyCcdFormPage.chooseOptionContainingText('#elementsDisputed' + disputed + '_0_issueCode', 'AD');
    }

    async disputedPage(yesOrNo: string, reference: string) {
        await element(by.id('elementsDisputedIsDecisionDisputedByOthers-' + yesOrNo)).click();
        if (yesOrNo === 'Yes') {
            await element(by.id('elementsDisputedLinkedAppealRef')).sendKeys(reference);
        }
    }

    async jointParty(yesOrNo: string) {
        await element(by.id('jointParty-' + yesOrNo)).click();
    }

    async jointPartyName() {
        await anyCcdFormPage.chooseOptionContainingText('#jointPartyName_title', 'Mr');
        await element(by.id('jointPartyName_firstName')).sendKeys('Jp')
        await element(by.id('jointPartyName_lastName')).sendKeys('Party')
    }

    async jointPartyIdentityDetails() {
        await element(by.id('jointPartyIdentity_dob-day')).sendKeys('20')
        await element(by.id('jointPartyIdentity_dob-month')).sendKeys('12')
        await element(by.id('jointPartyIdentity_dob-year')).sendKeys('1980')

        const nino = niGenerator.myNIYearPrefix() + niGenerator.myNIMonthPrefix() + niGenerator.myNINumberFromDay() + 'C';
        await element(by.id('jointPartyIdentity_nino')).sendKeys(nino);
    }

    async jointPartyAddress(yesOrNo: string) {
        await element(by.id('jointPartyAddressSameAsAppellant-' + yesOrNo)).click();
    }
}
