import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import { AnyCcdPage } from './any-ccd.page';
import * as path from 'path';

const anyCcdPage = new AnyCcdPage();
export class DwpResponsePage extends AnyPage {

    async uploadResponse(action: string) {
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile('dwpResponseDocument_documentLink', 'issue1.pdf');
        await this.uploadFile('dwpAT38Document_documentLink', 'issue2.pdf');
        await this.uploadFile('dwpEvidenceBundleDocument_documentLink', 'issue3.pdf');
        if (action === 'YES') {
            await anyCcdPage.clickElementById('dwpFurtherInfo-Yes');
        } else {
            await anyCcdPage.clickElementById('dwpFurtherInfo-No');
        }
        anyCcdPage.chooseOptionByElementId('dwpState', 'Response submitted (DWP)');
    }

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }
}
