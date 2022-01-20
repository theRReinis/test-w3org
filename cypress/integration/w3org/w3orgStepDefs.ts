import { And, Given } from 'cypress-cucumber-preprocessor/steps';

Given('open w3org home page with {string}', (path: string) => {
  cy.visit(path, {
    failOnStatusCode: false,
    onBeforeLoad(win) {
      cy.spy(win.console, 'error').as('consoleError');
    }
  });
});

And('there is no console error', () => {
  cy.get('@consoleError').should('not.to.be.called');
});
