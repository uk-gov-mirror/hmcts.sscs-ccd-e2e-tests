import { by, element } from 'protractor';
import { AnyCcdPage } from './any-ccd.page';

export class AppointeePage extends AnyCcdPage {

      async addAppointeeDetails() {
            element(by.id('appeal_appellant_appointee_name_title')).sendKeys('Mr');
            element(by.id('appeal_appellant_appointee_name_firstName')).sendKeys('AppointeeFirstName');
            element(by.id('appeal_appellant_appointee_name_lastName')).sendKeys('AppointeeLastName');

            element(by.id('appeal_appellant_appointee_identity_dob-day')).sendKeys('1');
            element(by.id('appeal_appellant_appointee_identity_dob-month')).sendKeys('1');
            element(by.id('appeal_appellant_appointee_identity_dob-year')).sendKeys('1990');

            element(by.id('appeal_appellant_appointee_identity_nino')).sendKeys('KL335252C');

            element(by.id('appeal_appellant_appointee_address_line1')).sendKeys('line1');
            element(by.id('appeal_appellant_appointee_address_line2')).sendKeys('line2');
            element(by.id('appeal_appellant_appointee_address_town')).sendKeys('town');
            element(by.id('appeal_appellant_appointee_address_county')).sendKeys('UK');
            element(by.id('appeal_appellant_appointee_address_postcode')).sendKeys('TS1 1ST');

            element(by.id('appeal_appellant_appointee_contact_phone')).sendKeys('0123456789');
            element(by.id('appeal_appellant_appointee_contact_mobile')).sendKeys('0123456789');
            element(by.id('appeal_appellant_appointee_contact_email')).sendKeys('abc@abcxyz.com');
            element(by.xpath('//button[2]')).click();
        }
}
