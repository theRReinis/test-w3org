/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Assert that all URL links response is not client error status codes [400-499]
     * @param aliasName - Sharing object which contains HTML Elements with URL links
     * @param searchAttr - HTML attributes which contains URL links. Example, href or src
     */
    assertLinksStatusNotClientError(aliasName: string, searchAttr: string): Chainable<void>;
  }
}
