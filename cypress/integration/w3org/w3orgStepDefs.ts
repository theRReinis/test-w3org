import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('open w3org home page with {string}', (path: string) => {
  cy.visit(path, { failOnStatusCode: false });
});