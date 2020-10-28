import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import { AnyCcdPage } from './any-ccd.page';
import * as path from 'path';

const anyCcdPage = new AnyCcdPage();

export class AdjournmentPage extends AnyPage {

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

    async addVenue() {
        element(by.id('hearings_0_venue_name')).sendKeys('Fox Court');
        element(by.id('hearings_0_venue_address_line1')).sendKeys('Fox Court');
        element(by.id('hearings_0_venue_address_line2')).sendKeys('4th Floor');
        element(by.id('hearings_0_venue_address_line3')).sendKeys('30 Brooke Street');

        element(by.id('hearings_0_venue_address_town')).sendKeys('Town');
        element(by.id('hearings_0_venue_address_county')).sendKeys('County');
        element(by.id('hearings_0_venue_address_postcode')).sendKeys('EC1N 7RS');
        element(by.id('hearings_0_venue_address_country')).sendKeys('UK');
        element(by.id('hearings_0_venue_googleMapLink')).sendKeys('https://www.google.com/maps/place/4th+Floor+30+Brooke+Street+EC1N+7RS/@51.518706,-0.110348');
        element(by.id('hearings_0_judge')).sendKeys('Judge');
        element(by.id('hearings_0_hearingDate-day')).sendKeys('20');
        element(by.id('hearings_0_hearingDate-month')).sendKeys('10');
        element(by.id('hearings_0_hearingDate-year')).sendKeys('2020');
        element(by.id('hearings_0_time')).sendKeys('13:00');

        element(by.id('hearings_0_postponedDate-day')).sendKeys('20');
        element(by.id('hearings_0_postponedDate-month')).sendKeys('10');
        element(by.id('hearings_0_postponedDate-year')).sendKeys('2020');
        anyCcdPage.clickElementById('hearings_0_adjourned-Yes');

        element(by.id('hearings_0_adjournedDate-day')).sendKeys('20');
        element(by.id('hearings_0_adjournedDate-month')).sendKeys('10');
        element(by.id('hearings_0_adjournedDate-year')).sendKeys('2020');

        element(by.id('hearings_0_hearingId')).sendKeys('12345');

        element(by.id('hearings_0_eventDate-day')).sendKeys('20');
        element(by.id('hearings_0_eventDate-month')).sendKeys('10');
        element(by.id('hearings_0_eventDate-year')).sendKeys('2020');

        await anyCcdPage.click('Continue');
        await anyCcdPage.click('Submit');
    }

    async addPanelMembers() {
        element(by.id('adjournCaseDisabilityQualifiedPanelMemberName')).sendKeys('Disability Member');
        element(by.id('adjournCaseMedicallyQualifiedPanelMemberName')).sendKeys('Medically Member');
    }

    async addReasons() {
      await anyCcdPage.click('Add new');
      await element(by.id('adjournCaseReasons_0')).sendKeys('Appellant not available');
    }

}
