import { AnyCcdPage } from '../../pages/any-ccd.page';
import { Then } from 'cucumber';
import { expect } from 'chai';

const anyCcdPage = new AnyCcdPage();

Then(/^I (?:am on|should see) the (.+) page$/, async function (headingText) {
    expect(await anyCcdPage.pageHeadingContains(headingText)).to.equal(true);
});
