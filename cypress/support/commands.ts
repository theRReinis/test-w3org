Cypress.Commands.add('assertLinksStatusNotClientError', (aliasName, searchAttr) => {
  cy.get(`@${aliasName}`).each((el) => {
    cy.wrap(el)
      .invoke('attr', searchAttr)
      .then((urlLink) => {
        cy.request({ url: urlLink, failOnStatusCode: false }).then((response) => {
          assert.isTrue(
            isStatusNotClientError(response.status),
            `Response status of URL link: ${urlLink} is not client error status`
          );
        });
      });
  });
});

function isStatusNotClientError(statusCode: number): boolean {
  // Client error response status code (400-499)
  if (statusCode >= 400 && statusCode <= 499) {
    return false;
  }
  return true;
}
