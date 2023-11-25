import '../login_with_correct_credentials.cy';
require('@cypress/xpath');
const { CREATE_TAGS_SECTION, CREATE_NEW_TAG_OPTION, TAG_NAME_INPUT, TAG_DESCRIPTION_TEXTAREA, SAVE_TAG_BUTTON, DELETE_TAG_BUTTON } = require('../globals/constants');

Cypress.Commands.add('crearTag', (title, longDescription) => {
    cy.hacerLoginCorrecto();
    cy.xpath(CREATE_TAGS_SECTION).click();
    cy.wait(1000);
    cy.xpath(CREATE_NEW_TAG_OPTION).click();
    cy.wait(1000);
    cy.xpath(TAG_NAME_INPUT).type(title);
    cy.wait(100);
    cy.xpath(TAG_DESCRIPTION_TEXTAREA).type(longDescription);
    cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[2]/input').click();
});

describe('Como usuario quiero probar si puedo crear una etiqueta con una descripcion muy larga', () => {
    it('Intentar crear etiqueta con una descripcion muy largo.', () => {
        cy.readFile('./MOCK_DATA.json').then((data) => {
            const datos = data;
            const randomObject = datos[Math.floor(Math.random() * datos.length)];
            const title = randomObject.shor_text;
            const longDescription = randomObject.long_text;
            cy.crearTag(title, longDescription);
            cy.screenshot(`crear_tag_con_descripcion_muy_largos`);
            cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[3]/p[1]').should('have.text', '\n    Description cannot be longer than 500 characters.\n');
        });


    });
});
