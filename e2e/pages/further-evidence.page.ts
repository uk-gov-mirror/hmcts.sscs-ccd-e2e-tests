import { by, element } from 'protractor';
import { AnyPage } from "./any.page";
// import { AnyCcdPage } from './any-ccd.page';
import * as path from 'path';


// const anyCcdPage = new AnyCcdPage();
export class FurtherEvidencePage extends AnyPage {

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }

    async enterFileName(inputElement: string, fileName: string) {
        await element(by.id(inputElement)).sendKeys(fileName);
    }
}