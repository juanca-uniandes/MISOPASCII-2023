import './login.cy';
require('@cypress/xpath');
const {USER_PROFILE_DROPDOWN, LOGOUT_LINK} = require('./globals/constants');



Cypress.Commands.add('hacerLogout', () => {
    cy.xpath(USER_PROFILE_DROPDOWN).click();
    cy.xpath(LOGOUT_LINK).click();
});

describe('Como usuario quiero poder cerrar la sesión', () => {

    it('Hacer logout después de iniciar sesión', () => {
        cy.hacerLoginCorrecto();
        cy.screenshot(`login_credenciales_correctas`);

        cy.hacerLogout();
        cy.screenshot(`logout_exitoso`);
    });

});





