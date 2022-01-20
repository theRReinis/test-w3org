import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

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

And('response code from page is {int}', (statusCode: number) => {
  cy.url().then((currentUrl) => {
    cy.request({ url: currentUrl, failOnStatusCode: false }).its('status').should('eq', statusCode);
  });
});

When('gather all links on page', () => {
  cy.get('body').find('[href]').as('pageAnchorLinks');
  cy.get('body').find('[src]').as('pageImageLinks');
});

Then('validate that all links do not respond with client error status code', () => {
  cy.assertLinksStatusNotClientError('pageAnchorLinks', 'href');
  cy.assertLinksStatusNotClientError('pageImageLinks', 'src');
});
