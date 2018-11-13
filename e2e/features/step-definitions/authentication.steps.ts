import { AuthenticationFlow } from '../../flows/authentication.flow';
import { AnyCcdPage } from '../../pages/any-ccd.page';
import { Given } from 'cucumber';

const anyCcdPage = new AnyCcdPage();
const authenticationFlow = new AuthenticationFlow();

Given(/^I am signed in as a Case Officer$/, {timeout: 30 * 1000}, async function () {
    await authenticationFlow.signInAsCaseOfficer();
    await anyCcdPage.waitUntilLoaded();
});
