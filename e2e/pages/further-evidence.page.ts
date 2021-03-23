import { by, element } from 'protractor';
import { AnyPage } from './any.page';
import * as path from 'path';
const serviceConfig = require('../service.conf');

export class FurtherEvidencePage extends AnyPage {

    async uploadFile(inputElement: string, fileName: string) {
        let absolutePath, fileToUpload = 'e2e/dwpResponse/' + fileName;
        if (serviceConfig.TestsForCrossBrowser) {
            absolutePath = fileToUpload;
        } else {
            absolutePath = path.resolve(__dirname, fileToUpload);
        }
        console.log('Absolute path is..', absolutePath);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }

    async enterFileName(inputElement: string, fileName: string) {
        await element(by.id(inputElement)).sendKeys(fileName);
    }

    async enterScannedDate(date: string, month: string, year: string) {
        await element(by.id('scannedDocuments_0_scannedDate-day')).sendKeys(date);
        await element(by.id('scannedDocuments_0_scannedDate-month')).sendKeys(month);
        await element(by.id('scannedDocuments_0_scannedDate-year')).sendKeys(year);
    }
}
