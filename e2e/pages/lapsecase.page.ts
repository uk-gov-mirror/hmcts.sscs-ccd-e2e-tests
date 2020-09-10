import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import { AnyCcdPage } from './any-ccd.page';
import * as path from 'path';

const anyCcdPage = new AnyCcdPage();
export class LapseCasePage extends AnyPage {

    async uploadResponse(action: string) {
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile('dwpLT203_documentLink', 'issue1.pdf');
        await this.uploadFile('dwpLapseLetter_documentLink', 'issue2.pdf');

        anyCcdPage.chooseOptionByElementId('dwpState', 'No action');
        anyCcdPage.chooseOptionByElementId('interlocReviewState', 'N/A');
    }

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }
}
