import {faker} from '@faker-js/faker';
import './login_with_correct_credentials.cy';
require('@cypress/xpath');
describe('Como usuario quiero borrar un miembro.', () => {

    it('Eliminar miembro', () => {
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
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/header/section/button').click();
        cy.wait(1000);
        cy.screenshot(`crear_miembro_con_informacion_aleatoria_correcta`);
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/header/section/span/button').click();
        cy.wait(1000);
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/header/section/span/ul/li[2]/button').click();
        cy.wait(1000);
        cy.get('.epm-modal.fullscreen-modal-action.fullscreen-modal-wide')
            .should('be.visible')
            .within(() => {
                cy.xpath('/html/body/div[5]/div/div/div[2]/button[2]')
                    .click();
            });
        cy.get('.gh-canvas-title').should('contain', 'Members');
    });
});