import '../../e2e/login_with_correct_credentials.cy';
require('@cypress/xpath');
const { CREATE_TAGS_SECTION, CREATE_NEW_TAG_OPTION, TAG_NAME_INPUT, TAG_DESCRIPTION_TEXTAREA, SAVE_TAG_BUTTON, DELETE_TAG_BUTTON } = require('../../e2e/globals/constants');

describe('Como usuario quiero crear una etiqueta exitosamente', () => {
  it('Crear una etiqueta exitosamente', () => {
    cy.readFile('./MOCK_DATA.json').then((data) => {
      const datos = data;
      const randomObject = datos[Math.floor(Math.random() * datos.length)];
      cy.hacerLoginCorrecto();
      cy.xpath(CREATE_TAGS_SECTION).click();
      cy.wait(1000);
      cy.xpath(CREATE_NEW_TAG_OPTION).click();
      cy.wait(1000);
      cy.xpath(TAG_NAME_INPUT).type('sadsadsaasdsa');
      cy.wait(1000);
      cy.xpath(TAG_DESCRIPTION_TEXTAREA).type('fdfaffasfsdfdwf');
      cy.wait(1000);
      cy.xpath(SAVE_TAG_BUTTON).click();
      cy.wait(2000);
      cy.screenshot(`create_tag_exitoso`);
      cy.xpath(DELETE_TAG_BUTTON).should('exist');
    });
  });
});
