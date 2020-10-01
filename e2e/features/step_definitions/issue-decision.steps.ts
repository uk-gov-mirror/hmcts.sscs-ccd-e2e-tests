import { browser } from 'protractor';
import { When } from 'cucumber';
import { AnyCcdPage } from '../../pages/any-ccd.page';
import { IssueDirectionPage } from '../../pages/issue-direction.page';

const anyCcdPage = new AnyCcdPage();
const issueDirectionPage = new IssueDirectionPage();

When(/^I write a final decision "(.+)"$/, async function (allowed) {
  console.log("allowed in decision" + allowed);
  await anyCcdPage.clickElementById('writeFinalDecisionIsDescriptorFlow-No');
  await anyCcdPage.clickElementById('writeFinalDecisionGenerateNotice-No');
  await anyCcdPage.click('Continue');
  await anyCcdPage.clickElementById('writeFinalDecisionAllowedOrRefused-allowed');
  await anyCcdPage.click('Continue');
  await issueDirectionPage.uploadDirection();
  await anyCcdPage.click('Continue');
  await anyCcdPage.click('Submit');
  expect(await anyCcdPage.pageHeadingContains('Documents')).to.equal(true);
});
