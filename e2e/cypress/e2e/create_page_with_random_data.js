import './login_with_correct_credentials.cy';
require('@cypress/xpath');
import { CREATE_NEW_PAGE_OPTION, PAGES_SECTION,  PAGE_TITLE_TEXTAREA, BODY_TEXT, PUBLISH_OPTION, FINISH_REVIEW_BUTTON, PUBLISH_PAGE_NOW_BUTTON, CONFIRMATION_ELEMENT } from './globals/constants';
const { faker } = require('@faker-js/faker');
Cypress.Commands.add('crearPagina', () => {
  cy.hacerLoginCorrecto();

  cy.xpath(PAGES_SECTION).click();
  cy.wait(2000);

  cy.xpath(CREATE_NEW_PAGE_OPTION).click();
  cy.wait(2000);

  cy.xpath(PAGE_TITLE_TEXTAREA).type(faker.lorem.lines(10));
  cy.wait(2000);

  cy.xpath(BODY_TEXT).click();
  cy.wait(2000);

  cy.xpath(PUBLISH_OPTION).click();
  cy.wait(2000);

  cy.xpath(FINISH_REVIEW_BUTTON).click();
  cy.wait(2000);

  cy.xpath(PUBLISH_PAGE_NOW_BUTTON).click();
  cy.wait(5000);
});

describe('User can create page successfully', () => {
  it('should create a page successfully', () => {
    cy.crearPagina();
    cy.xpath(CONFIRMATION_ELEMENT).should('exist');
    cy.wait(2000);
  });
});
