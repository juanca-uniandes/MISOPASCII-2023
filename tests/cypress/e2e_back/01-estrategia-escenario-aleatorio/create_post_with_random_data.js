import '../../e2e/login_with_correct_credentials.cy';
require('@cypress/xpath');
const { BUTTON_SEE_MOST_POST, BUTTON_CREATE_NEW_POST, INPUT_POST_TITLE, BODY_TEXT, BUTTON_PUSBLISH_POST, BUTTON_FINISH_POST_REVIEW, BUTTON_PUBLISH_POST_NOW, DIV_TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED } = require('../globals/constants');
const { faker } = require('@faker-js/faker');

Cypress.Commands.add('crearPublicacion', () => {
  cy.hacerLoginCorrecto();
  cy.xpath(BUTTON_SEE_MOST_POST).click();
  cy.wait(1000);
  cy.xpath(BUTTON_CREATE_NEW_POST).click();
  cy.wait(1000);
  cy.xpath(INPUT_POST_TITLE).type(faker.lorem.lines(2));
  cy.wait(1000);
  cy.xpath(BODY_TEXT).click();
  cy.wait(2000);
  cy.xpath(BUTTON_PUSBLISH_POST).click();
  cy.wait(1000);
  cy.xpath(BUTTON_FINISH_POST_REVIEW).click();
  cy.wait(1000);
  cy.xpath(BUTTON_PUBLISH_POST_NOW).click();
  cy.wait(2000);
});

describe('Como usuario quiero crear una publicación exitosamente', () => {
  it('Crear una publicación exitosamente', () => {
    cy.crearPublicacion();
    cy.screenshot(`create_post_exitoso`);
    cy.xpath(DIV_TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED).should('exist');
  });
});
