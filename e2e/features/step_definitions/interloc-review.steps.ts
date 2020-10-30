import { AnyCcdPage } from '../../pages/any-ccd.page';
import { When } from 'cucumber';

const anyCcdPage = new AnyCcdPage();

When(/^I choose Requires Interlocutory Review Yes "(.+)"$/, async function (action) {
    await anyCcdPage.clickElementById('isInterlocRequired-Yes');
    await anyCcdPage.chooseOptionByElementId('selectWhoReviewsCase', 'Review by Judge');
    await anyCcdPage.click('Continue');
});

When(/^I set DWP State to No action "(.+)"$/, async function (action) {
    await anyCcdPage.chooseOptionByElementId('dwpState', 'No action');
    await anyCcdPage.click('Continue');
});
