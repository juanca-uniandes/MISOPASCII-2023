import './login_with_correct_credentials.cy';
require('@cypress/xpath');
const { CREATE_TAGS_SECTION, CREATE_NEW_TAG_OPTION, TAG_NAME_INPUT, TAG_DESCRIPTION_TEXTAREA, SAVE_TAG_BUTTON, DELETE_TAG_BUTTON } = require('./globals/constants');
const { faker } = require('@faker-js/faker');

Cypress.Commands.add('crearTag', (longTitle) => {
    cy.hacerLoginCorrecto();
    cy.xpath(CREATE_TAGS_SECTION).click();
    cy.wait(1000);
    cy.xpath(CREATE_NEW_TAG_OPTION).click();
    cy.wait(1000);
    cy.xpath(TAG_NAME_INPUT).type(longTitle);
    cy.wait(2000);
    cy.xpath(TAG_DESCRIPTION_TEXTAREA).click();
    cy.wait(1000);

});

describe('Como usuario quiero probar si puedo crear una etiqueta con un titulo muy largo', () => {
    it('Intentar crear etiqueta con titulo muy largo ', () => {
        const longTitle = faker.lorem.words(500);
        cy.crearTag(longTitle);
        cy.screenshot(`crear_tag_con_titulo_muy_largos`);
        cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[1]/div[1]/span/p[1]').should('have.text', '\n    Tag names cannot be longer than 191 characters.\n');
    });
});
