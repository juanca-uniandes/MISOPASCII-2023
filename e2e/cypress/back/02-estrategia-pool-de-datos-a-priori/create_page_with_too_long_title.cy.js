import '../../e2e/login_with_correct_credentials.cy';
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
} from '../../e2e/globals/constants';

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
        cy.readFile('./MOCK_DATA.json').then((data) => {
            const datos = data;
            const randomObject = datos[Math.floor(Math.random() * datos.length)];
            const longTitle = randomObject.long_text;
            cy.crearPagina(longTitle);
            cy.xpath(BUTTON_PUSBLISH_POST).should('not.exist');
        });
    });
});