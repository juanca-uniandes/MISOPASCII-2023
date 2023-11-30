import '../login_with_correct_credentials.cy';
require('@cypress/xpath');
import {
    CREATE_NEW_PAGE_OPTION,
    PAGES_SECTION,
    PAGE_TITLE_TEXTAREA,
    BODY_TEXT,
    PUBLISH_OPTION,
    FINISH_REVIEW_BUTTON,
    PUBLISH_PAGE_NOW_BUTTON,
    CONFIRMATION_ELEMENT,
    BUTTON_PUSBLISH_POST
} from '../globals/constants';
const { faker } = require('@faker-js/faker');
Cypress.Commands.add('crearPagina', (longTitle) => {
    cy.hacerLoginCorrecto();

    cy.xpath(PAGES_SECTION).click();
    cy.wait(2000);

    cy.xpath(CREATE_NEW_PAGE_OPTION).click();
    cy.wait(2000);

    cy.xpath(PAGE_TITLE_TEXTAREA).type(longTitle);
    cy.wait(2000);

    cy.xpath(BODY_TEXT).click();
    cy.wait(2000);
});

describe('Como usuario puedo crear una pagina con un titulo muy largo', () => {
    it('Intentar crear pagina con titulo muy largo', () => {
        const longTitle = faker.lorem.words(500);
        cy.crearPagina(longTitle);
        cy.xpath(BUTTON_PUSBLISH_POST).should('not.exist');
    });
});
