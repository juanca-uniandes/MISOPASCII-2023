import './login.cy';
require('@cypress/xpath');
const { CREATE_TAGS_SECTION, CREATE_NEW_TAG_OPTION, TAG_NAME_INPUT, TAG_DESCRIPTION_TEXTAREA, SAVE_TAG_BUTTON, DELETE_TAG_BUTTON } = require('./globals/constants');

Cypress.Commands.add('crearTag', () => {
  cy.hacerLoginCorrecto();
  cy.xpath(CREATE_TAGS_SECTION).click();
  cy.wait(1000);
  cy.xpath(CREATE_NEW_TAG_OPTION).click();
  cy.wait(1000);
  cy.xpath(TAG_NAME_INPUT).type('TagName');
  cy.wait(1000);
  cy.xpath(TAG_DESCRIPTION_TEXTAREA).type('Tag Description');
  cy.wait(1000);
  cy.xpath(SAVE_TAG_BUTTON).click();
  cy.wait(2000);
});

describe('Como usuario quiero crear una etiqueta exitosamente', () => {
  it('Crear una etiqueta exitosamente', () => {
    cy.crearTag();
    cy.screenshot(`create_tag_exitoso`);
    cy.xpath(DELETE_TAG_BUTTON).should('exist');
  });
});
