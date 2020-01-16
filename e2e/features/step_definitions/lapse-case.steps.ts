import { AnyCcdPage } from '../../pages/any-ccd.page';
import { When } from 'cucumber';

const anyCcdPage = new AnyCcdPage();

When(/^I set DWP State to Lapsed "(.+)"$/, async function (action) {
    anyCcdPage.chooseOptionByElementId('dwpState', 'No action');
    anyCcdPage.chooseOptionByElementId('interlocReviewState', 'N/A');
    await anyCcdPage.click('Continue');
});
