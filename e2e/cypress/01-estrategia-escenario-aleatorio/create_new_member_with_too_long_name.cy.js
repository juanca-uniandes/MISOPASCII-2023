import {faker} from '@faker-js/faker';
import '../e2e/login_with_correct_credentials.cy';
require('@cypress/xpath');
describe('Como usuario quiero verificar si puedo crear un miembro con un nombre muy largo', () => {

    it('Intentar crear miembro con nombre muy largo', () => {
        cy.hacerLoginCorrecto();
        const fakeEmail = faker.internet.email();
        const fakeName = faker.lorem.words(1000);
        cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/div[2]/a').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input').type(fakeName);
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input').type(fakeEmail);
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/header/section/button').click();
        cy.wait(1000);
        cy.screenshot(`create_member_with_too_long_name`);
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/header/section/button/span').invoke('text').then((actualText) => {
            const cleanedActualText = actualText.replace(/\s+/g, ' ').trim();
            expect(cleanedActualText).to.equal('Retry');
        });
        cy.wait(1000);
    });
});