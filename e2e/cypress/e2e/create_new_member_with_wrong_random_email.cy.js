import {faker} from '@faker-js/faker';
import './login_with_correct_credentials.cy';
require('@cypress/xpath');
describe('Como usuario quiero verificar si puedo crear un miembro con un correo incorrecto', () => {

    it('Intentar crear un miembro con correcto incorrecto', () => {
        cy.hacerLoginCorrecto();
        const fakeWrongEmail = faker.lorem.words(5);
        const fakeName = faker.name.firstName();
        cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/div[2]/a').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input').type(fakeName);
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input').type(fakeWrongEmail);
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/header/section/button').click();
        cy.wait(1000);
        cy.screenshot('create_new_member_with_wrong_email');
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p').invoke('text').then((actualText) => {
            const cleanedActualText = actualText.replace(/\s+/g, ' ').trim();
            expect(cleanedActualText).to.equal('Invalid Email.');
        });
        cy.wait(1000);
    });
});