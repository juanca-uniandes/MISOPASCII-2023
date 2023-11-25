import {faker} from '@faker-js/faker';
import '../e2e/login_with_correct_credentials.cy';
require('@cypress/xpath');
describe('Como usuario quiero crear un mimebro con una nota muy larga', () => {

    it('Crear miembro con nota muy larga', () => {
        cy.hacerLoginCorrecto();
        const fakeEmail = faker.internet.email();
        const fakeName = faker.name.firstName();
        cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/div[2]/a').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input').type(fakeName);
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input').type(fakeEmail);
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/textarea').type(faker.lorem.words(700));
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/header/section/button').click();
        cy.wait(1000);
        cy.screenshot(`crear_miembro_con_nota_muy_larga`);
        cy.xpath('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/p[1]').invoke('text').then((actualText) => {
            const cleanedActualText = actualText.replace(/\s+/g, ' ').trim();
            expect(cleanedActualText).to.equal('Note is too long.');
        });
        cy.wait(1000);
    });
});