import { Params } from '../../params';
const { LOGIN_URL, EMAIL, PASSWORD } = Params;
const {LOGIN_INPUT_EMAIL, LOGIN_INPUT_PASSWORD, LOGIN_SIGNIN_BUTTON, ADMIN_DASHBOARD_TITLE} = require('../globals/constants');
require('@cypress/xpath');
describe('Como usuario quiero no poder ingresar al sistema sin ingresar el email', () => {

    Cypress.Commands.add('intentarHacerLogin', (randomEmail, randomPassword) => {
        cy.visit(LOGIN_URL);
        cy.get(LOGIN_INPUT_EMAIL).type(randomEmail).clear();
        cy.get(LOGIN_INPUT_PASSWORD).type(randomPassword);
        cy.get(LOGIN_SIGNIN_BUTTON).click();
    });

    it('Hacer login sin digitar email', () => {
        cy.readFile('./MOCK_DATA.json').then((data) => {
            const datos = data;
            const randomObject = datos[Math.floor(Math.random() * datos.length)];
            const randomEmail = randomObject.email;
            const randomPassword = randomObject.password;
            cy.intentarHacerLogin(randomEmail, randomPassword);
            cy.screenshot(`login_sin_digital_email`);
            cy.xpath('/html/body/div[2]/div/main/div[1]/div/section/p').should('have.text', 'Please fill out the form to sign in. ');
        });
    });
});