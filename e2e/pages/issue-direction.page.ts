import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import * as path from 'path';

export class IssueDirectionPage extends AnyPage {

    async uploadDirection() {
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile('writeFinalDecisionPreviewDocument', 'issue1.pdf');
        //await this.uploadFile('dwpLapseLetter_documentLink', 'issue2.pdf');

        //anyCcdPage.chooseOptionByElementId('dwpState', 'No action');
        //anyCcdPage.chooseOptionByElementId('interlocReviewState', 'N/A');

    }

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }
}
