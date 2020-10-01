import { AnyCcdPage } from '../../pages/any-ccd.page';
import { When } from 'cucumber';
import { expect } from 'chai';

const anyCcdPage = new AnyCcdPage();

When(/^I choose Requires Interlocutory Review No "(.+)"$/, async function (action) {
    await anyCcdPage.clickElementById('isInterlocRequired-No');
    await anyCcdPage.click('Continue');
});

When(/^I submit "(.+)"$/, async function (action) {
    expect(await anyCcdPage.pageHeadingContains(action)).to.equal(true);
    await anyCcdPage.click('Submit');
});
