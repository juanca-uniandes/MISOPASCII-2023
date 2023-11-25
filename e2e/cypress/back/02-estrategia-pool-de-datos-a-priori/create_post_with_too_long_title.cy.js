import '../../e2e/login_with_correct_credentials.cy';
require('@cypress/xpath');
const { BUTTON_SEE_MOST_POST, BUTTON_CREATE_NEW_POST, INPUT_POST_TITLE, BODY_TEXT, BUTTON_PUSBLISH_POST, BUTTON_FINISH_POST_REVIEW, BUTTON_PUBLISH_POST_NOW, DIV_TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED } = require('../../e2e/globals/constants');

Cypress.Commands.add('crearPublicacion', (longTitle) => {
    cy.hacerLoginCorrecto();
    cy.xpath(BUTTON_SEE_MOST_POST).click();
    cy.wait(1000);
    cy.xpath(BUTTON_CREATE_NEW_POST).click();
    cy.wait(1000);
    cy.xpath(INPUT_POST_TITLE).type(longTitle);
    cy.wait(1000);
    cy.xpath(BODY_TEXT).click();
    cy.wait(2000);
});

describe('Como usuario quiero verificar si puedo crear un post con un titulo demasiado largo', () => {
    it('Intentar crear post con titulo demasiado largo', () => {
        cy.readFile('./MOCK_DATA.json').then((data) => {
            const datos = data;
            const randomObject = datos[Math.floor(Math.random() * datos.length)];
            const longTitle = randomObject.long_text;
            cy.crearPublicacion(longTitle);
            cy.screenshot(`crear_post_con_titulo_demasiado_largo`);
            cy.xpath(BUTTON_PUSBLISH_POST).should('not.exist');
        });
    });
});
