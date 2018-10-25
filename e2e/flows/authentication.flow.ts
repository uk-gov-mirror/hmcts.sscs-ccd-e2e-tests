import { browser } from 'protractor';
import { IdamSignInPage } from '../pages/idam-sign-in.page';

const serviceConfig = require('../service.conf');

export class AuthenticationFlow {

    private idamSignInPage = new IdamSignInPage();

    async signInAsCaseOfficer() {
        await this.idamSignInPage.signIn(
            serviceConfig.TestCaseOfficerUserName,
            serviceConfig.TestCaseOfficerPassword
        );
    }

    async signOut() {
        await browser.waitForAngularEnabled(false);
        await browser.driver.manage().deleteAllCookies();
        await browser.get(serviceConfig.CcdGatewayUrl + '/logout');
        await browser.get(serviceConfig.CcdWebUrl + '/');
    }
}
