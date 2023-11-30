import { Params } from '../params';
describe('Pruebas de Monkey con Viewports Aleatorios', () => {
    const maxWaitTime = 5000;

    it('Debería encontrar e interactuar con el botón Subscribe en modo caos con viewports aleatorios', () => {
        cy.visit(Params.MAIN_URL);

        const numRandomViewports = 10;

        for (let i = 0; i < numRandomViewports; i++) {
            const anchoAleatorio = Math.floor(Math.random() * 800) + 800;
            const altoAleatorio = Math.floor(Math.random() * 600) + 600;
            cy.viewport(anchoAleatorio, altoAleatorio);
            cy.get('span:contains("Subscribe")', { timeout: maxWaitTime }).should('be.visible');

        }
    });
});

