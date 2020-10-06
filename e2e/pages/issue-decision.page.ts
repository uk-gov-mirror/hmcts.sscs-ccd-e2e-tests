import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import * as path from 'path';

export class IssueDecisionPage extends AnyPage {

    async uploadDirection() {
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile('writeFinalDecisionPreviewDocument', 'issue1.pdf');
    }

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }

    async addPanelMembers() {
        element(by.id('writeFinalDecisionDisabilityQualifiedPanelMemberName')).sendKeys("Disability Member");
        element(by.id('writeFinalDecisionMedicallyQualifiedPanelMemberName')).sendKeys("Medically Member");
    }

    async pageReference() {
        element(by.id('writeFinalDecisionPageSectionReference')).sendKeys("20");
    }

    async fillSummary() {
        element(by.id('writeFinalDecisionDetailsOfDecision')).sendKeys("This is the summary");
    }




}
