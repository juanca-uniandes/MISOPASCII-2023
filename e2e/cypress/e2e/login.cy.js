import { Params } from '../params';
const { LOGIN_URL, EMAIL, PASSWORD } = Params;
const {LOGIN_INPUT_EMAIL, LOGIN_INPUT_PASSWORD, LOGIN_SIGNIN_BUTTON} = require('./globals/constants');
console.log(LOGIN_INPUT_EMAIL)

Cypress.Commands.add('hacerLoginCorrecto', () => {
    cy.visit(LOGIN_URL);
    cy.get(LOGIN_INPUT_EMAIL).type(EMAIL);
    cy.get(LOGIN_INPUT_PASSWORD).type(PASSWORD);
    cy.get(LOGIN_SIGNIN_BUTTON).click();
});

describe('Como usuario quiero hacer login con credenciales correctas', () => {

    it('Hacer login con las credenciales correctas', () => {
        cy.hacerLoginCorrecto();
        cy.screenshot(`login_credenciales_correctas`);
    });

});