import { by, element } from 'protractor';
import { AnyCcdPage } from './any-ccd.page';

export class AppointeePage extends AnyCcdPage {

      async addAppointeeDetails() {

            element(by.id('appeal_appellant_appointee_contact_phone')).sendKeys('0123456789');
        }
}
