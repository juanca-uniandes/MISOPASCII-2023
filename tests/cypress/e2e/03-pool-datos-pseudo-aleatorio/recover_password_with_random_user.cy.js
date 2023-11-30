import { Params } from '../../params';
const { LOGIN_URL, LOGIN_INPUT_EMAIL } = Params;
const { LOGIN_SIGNIN_BUTTON } = require('../globals/constants');
require('@cypress/xpath');

describe('Como admin quiero que un usuario que no existe en la bd no reciba correo de recuperacion de contrasena', () => {
    Cypress.Commands.add('intentarRecuperarContrasena', (randomEmail) => {
        cy.visit(LOGIN_URL);
        cy.get(LOGIN_INPUT_EMAIL).type(randomEmail);
        cy.xpath('/html/body/div[2]/div/main/div[1]/div/section/form/div[2]/span/button').click();
    });

    it('Recuperar contrasena', async () => {
        cy.request({
            method: 'GET',
            url: 'https://my.api.mockaroo.com/data.json',
            headers: {
                'X-API-Key': 'ffae6b60',
            },
        }).then(async (response) => {
            let data = await response.json();
            const randomEmail = data.email;
            await cy.intentarRecuperarContrasena(randomEmail);
            cy.screenshot(`login_sin_digital_email`);
            cy.xpath('/html/body/div[2]/div/main/div[1]/div/section/p').should('have.text', 'User not found. ');
        });
    });
});
