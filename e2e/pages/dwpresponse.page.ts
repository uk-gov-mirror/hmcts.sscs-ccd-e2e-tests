import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import * as path from 'path';

export class DwpResponsePage extends AnyPage {

    async uploadResponse() {
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile('dwpResponseDocument_documentLink', 'issue1.pdf');
        await this.uploadFile('dwpAT38Document_documentLink', 'issue2.pdf');
        await this.uploadFile('dwpEvidenceBundleDocument_documentLink', 'issue3.pdf');
        await element(by.id('dwpFurtherInfo-No')).click();
        await element(by.id('dwpState'))
            .element(by.xpath('.//option[normalize-space()="Response submitted (DWP)"]'))
            .click();
    }

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }
}
