import { browser } from 'protractor';
import { When } from 'cucumber';
import { AnyCcdPage } from '../../pages/any-ccd.page';
import { AdjournmentPage } from '../../pages/adjournment.page';


const anyCcdPage = new AnyCcdPage();
const adjournmentPage = new AdjournmentPage();

When(/^I book a hearing$/, async function () {
  await anyCcdPage.click('Add new');
  adjournmentPage.addVenue();
  await browser.sleep(5000);
});

When(/^I generate an adjournment notice$/, async function () {
  await anyCcdPage.clickElementById('adjournCaseGenerateNotice-Yes');
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('adjournCasePanelMembersExcluded-No');
  await anyCcdPage.click('Continue');
  await adjournmentPage.addPanelMembers();
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('adjournCaseTypeOfHearing-faceToFace');
  await anyCcdPage.click('Continue');

  await anyCcdPage.clickElementById('adjournCaseCanCaseBeListedRightAway-Yes');
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('adjournCaseTypeOfNextHearing-faceToFace');
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('adjournCaseNextHearingVenue-sameVenue');
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('adjournCaseNextHearingListingDurationType-standardTimeSlot');
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('adjournCaseInterpreterRequired-No');
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('adjournCaseNextHearingDateType-firstAvailableDate');
  await anyCcdPage.click('Continue');
  await adjournmentPage.addReasons();

  await anyCcdPage.click('Continue');
  await anyCcdPage.click('Continue');
  await anyCcdPage.click('Continue');
  await anyCcdPage.click('Submit');
  await browser.sleep(5000);
});

When(/^I continue$/, async function () {
    anyCcdPage.click('Continue');
});
