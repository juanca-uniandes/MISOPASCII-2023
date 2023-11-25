import { Params } from '../../params';
const { LOGIN_URL, EMAIL, PASSWORD } = Params;
const {LOGIN_INPUT_EMAIL, LOGIN_INPUT_PASSWORD, LOGIN_SIGNIN_BUTTON, ADMIN_DASHBOARD_TITLE} = require('../globals/constants');
require('@cypress/xpath');

describe('Como admin quiero que un usuario que no existe en la bd no reciba correo de recuperacion de contrasena', () => {

    Cypress.Commands.add('intentarRecuperarContrasena', (randomEmail) => {
        cy.visit(LOGIN_URL);
        cy.get(LOGIN_INPUT_EMAIL).type(randomEmail);
        cy.xpath('/html/body/div[2]/div/main/div[1]/div/section/form/div[2]/span/button').click()
    });

    it('Recuperar contrasena', () => {
        cy.readFile('./MOCK_DATA.json').then((data) => {
            const datos = data;
            const randomObject = datos[Math.floor(Math.random() * datos.length)];
            const randomEmail = randomObject.email;
            cy.intentarRecuperarContrasena(randomEmail);
            cy.screenshot(`login_sin_digital_email`);
            cy.xpath('/html/body/div[2]/div/main/div[1]/div/section/p').should('have.text', 'User not found. ');
        });
    });
});