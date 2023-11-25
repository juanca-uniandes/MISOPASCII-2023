import { Params } from '../params';
const { LOGIN_URL, EMAIL, PASSWORD } = Params;
const {LOGIN_INPUT_EMAIL, LOGIN_INPUT_PASSWORD, LOGIN_SIGNIN_BUTTON, ADMIN_DASHBOARD_TITLE} = require('../e2e/globals/constants');
const { faker } = require('@faker-js/faker');
require('@cypress/xpath');
describe('Como usuario quiero no poder ingresar al sistema con credenciales incorrectas', () => {

    Cypress.Commands.add('intentarHacerLogin', (randomEmail, randomPassword) => {
        cy.visit(LOGIN_URL);
        cy.get(LOGIN_INPUT_EMAIL).type(randomEmail);
        cy.get(LOGIN_INPUT_PASSWORD).type(randomPassword);
        cy.get(LOGIN_SIGNIN_BUTTON).click();
    });

    it('Hacer login con credenciales aleatorias', () => {
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();
        cy.intentarHacerLogin(randomEmail, randomPassword);
        cy.screenshot(`login_credenciales_aleatorias`);
        cy.xpath('/html/body/div[2]/div/main/div[1]/div/section/form/button/span').should('have.text', ' Retry');
    });
});