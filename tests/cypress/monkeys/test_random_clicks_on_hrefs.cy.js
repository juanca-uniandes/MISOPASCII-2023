import { Params } from '../params';
describe('Visitar Sitios desde Enlaces en la Página Principal', () => {
    it('Todos los links al ser visitados deberían tener el título del proyecto', () => {
        cy.visit(Params.MAIN_URL);
        cy.get('a').each(($link) => {
            const href = $link.attr('href');
            const text = $link.text();

            if ($link.hasClass('gh-navigation-logo') && text.trim() === 'test') {
                cy.log(`Visitando sitio: ${href}`);
                cy.visit(href);
                cy.contains(Params.PROJECT_NAME).should('exist');
            }
        });
    });
});
