import {Given } from "cypress-cucumber-preprocessor/steps"

Given('open w3org home page', () => {
    cy.visit('https://www.w3.org/')
})