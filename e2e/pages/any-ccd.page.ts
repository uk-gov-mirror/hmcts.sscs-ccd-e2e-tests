import { $, $$, browser, by, element, ExpectedConditions } from 'protractor';
import { AnyPage } from './any.page';
import { Wait } from '../enums/wait';

export class AnyCcdPage extends AnyPage {

    private signOutLink = '#sign-out';

    async click(linkText: string) {

        const linkPath = '//*[self::button or self::a][normalize-space()="' + linkText + '"]';

        await browser.wait(
            async () => {
                return await element
                    .all(by.xpath(linkPath))
                    .isPresent();
            },
            Wait.normal,
            'Button did not show in time'
        );

        await element
            .all(by.xpath(linkPath))
            .first()
            .click();
    }

    async clickElementById(elementId: string) {
        await element(by.id(elementId)).click();
    }

    async chooseOptionByElementId(elementId: string, option: string) {
        await element(by.id(elementId))
        .element(by.xpath('.//option[normalize-space()="' + option + '"]'))
        .click();
    }

    async isFieldValueDisplayed(
        fieldLabel: string,
        fieldValue: string
    ) {
        try {

            if (await $$('ccd-create-case-filters').isPresent()) {
                const fieldLabelElement = await element(by.xpath('//label[normalize-space()="' + fieldLabel + '"]'));
                const fieldElement = await element(by.css('#' + (await fieldLabelElement.getAttribute('for'))));
                const fieldElementTagName = await fieldElement.getTagName();

                if (fieldElementTagName === 'select') {

                    const fieldSelectedElement = await fieldElement.element(by.css('option:checked'));
                    return (await fieldSelectedElement.getText() === fieldValue);

                } else {
                    throw 'Unsupported field type';
                }

            } else if ($$('cut-tabs').isPresent()) {
                if ($$('ccd-event-log').isPresent()) {
                    return await element(by.xpath('//span[normalize-space()="' + fieldLabel + '"]/../..' +
                        '//td[normalize-space()="' + fieldValue + '"]'))
                        .isDisplayed();

                } else {
                    return await element(by.xpath('//div[normalize-space()="' + fieldLabel + '"]/../..' +
                        '//td[normalize-space()="' + fieldValue + '"]'))
                        .isDisplayed();
                }
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async getFieldValue(fieldLabel: string) {
        return await element
            .all(by.xpath('//div[normalize-space()="' + fieldLabel + '"]/../../td'))
            .first()
            .getText();
    }

    async pageHeadingContains(match: string) {
        try {

            await browser.wait(
                async () => {
                    return await element
                        .all(by.xpath('//*[self::h1 or self::h2 or self::h3][contains(text(), "' + match + '")]'))
                        .isPresent();
                },
                Wait.normal,
                'Page heading did not show in time'
            );

            return true;

        } catch (error) {
            return false;
        }
    }

    async alertContains(match: string) {

        await browser.wait(ExpectedConditions.visibilityOf($('div.alert-message')));
        return (await $('div.alert-message').getText()).includes(match);
    }

    async isLoaded() {
        return (await browser.driver.getCurrentUrl()).includes('ccd')
            && (await ExpectedConditions.visibilityOf($(this.signOutLink))());
    }

    async waitUntilLoaded() {
        await browser.waitForAngularEnabled(true);
        await browser.waitForAngular();
    }

    async reloadPage() {
        await browser.navigate().refresh();
        await browser.waitForAngular();
    }

    async selectIssueCode() {
        element(by.id('issueCode')).element(by.xpath('//*[@id="issueCode"]/option[2]')).click();
    }

    async selectGeneralIssueCode() {
        element(by.id('elementsDisputedGeneral_0_issueCode'))
        .element(by.xpath('//*[@id="elementsDisputedGeneral_0_issueCode"]/option[2]')).click();
    }

    async eventsPresentInHistory(linkText: string) {
        const linkPath = '//*[self::button or self::a][normalize-space()="' + linkText + '"]';
        return await element(by.xpath(linkPath)).isPresent();
    }
}
