import { browser, by, element } from 'protractor';
import { AnyPage } from './any.page';
import * as path from 'path';
import { expect } from 'chai';

export class IssueDecisionPage extends AnyPage {

    async uploadDirection() {
        await browser.waitForAngular();
        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        await this.uploadFile('writeFinalDecisionPreviewDocument', 'issue1.pdf');
    }

    async uploadFile(inputElement: string, fileName: string) {
        let fileToUpload = '../dwpResponse/' + fileName,
        absolutePath = path.resolve(__dirname, fileToUpload);
        await element(by.id(inputElement)).sendKeys(absolutePath);
    }

    async addPanelMembers() {
        element(by.id('writeFinalDecisionDisabilityQualifiedPanelMemberName')).sendKeys('Disability Member');
        element(by.id('writeFinalDecisionMedicallyQualifiedPanelMemberName')).sendKeys('Medically Member');
    }

    async pageReference() {
        element(by.id('writeFinalDecisionPageSectionReference')).sendKeys('20');
    }

    async fillSummary() {
        element(by.id('writeFinalDecisionDetailsOfDecision')).sendKeys('This is the summary');
    }

    async schedule6PageFieldsAreInTheCorrectOrder() {
        let labels = await element.all(by.className('form-label')).filter(e => e.isPresent() && e.isDisplayed());

        expect(labels.length).to.equal(19);
        expect(await labels[0].getText()).to.equal('Part 1: Physical Disabilities (Optional)');
        expect(await labels[1].getText()).to.equal('1. Mobilising unaided by another person with or without a walking stick, manual wheelchair or other aid if such aid is normally or could reasonably be worn or used.');
        expect(await labels[2].getText()).to.equal('2. Standing and sitting.');
        expect(await labels[3].getText()).to.equal('3. Reaching.');
        expect(await labels[4].getText()).to.equal('4. Picking up and moving or transferring by the use of the upper body and arms.');
        expect(await labels[5].getText()).to.equal('5. Manual dexterity.');
        expect(await labels[6].getText()).to.equal('6. Making self understood through speaking, writing, typing, or other means which are normally or could reasonably be used, unaided by another person.');
        expect(await labels[7].getText()).to.equal('7. Understanding communication by: (i) verbal means (such as hearing or lip reading) alone; (ii) non-verbal means (such as reading 16 point print or Braille) alone; or (iii) a combination of sub-paragraphs (i) and (ii), using any aid that is normally or could reasonably be used, unaided by another person.');
        expect(await labels[8].getText()).to.equal('8. Navigation and maintaining safety using a guide dog or other aid if either or both are normally used or could reasonably be used.');
        expect(await labels[9].getText()).to.equal('9. Absence or loss of control whilst conscious leading to extensive evacuation of the bowel and/or bladder, other than enuresis (bed- wetting), despite the wearing or use of any aids or adaptations which are normally or could reasonably be worn or used.');
        expect(await labels[10].getText()).to.equal('10. Consciousness during waking moments.');

        expect(await labels[11].getText()).to.equal('Part 2: Mental, cognitive and intellectual function assessment (Optional)');
        expect(await labels[12].getText()).to.equal('11. Learning tasks.');
        expect(await labels[13].getText()).to.equal('12. Awareness of everyday hazards (such as boiling water or sharp objects).');
        expect(await labels[14].getText()).to.equal('13. Initiating and completing personal action (which means planning, organisation, problem solving, prioritising or switching tasks).');
        expect(await labels[15].getText()).to.equal('14. Coping with change.');
        expect(await labels[16].getText()).to.equal('15. Getting about.');
        expect(await labels[17].getText()).to.equal('16. Coping with social engagement due to cognitive impairment or mental disorder.');
        expect(await labels[18].getText()).to.equal('17. Appropriateness of behaviour with other people, due to cognitive impairment or mental disorder.');


    }
}
