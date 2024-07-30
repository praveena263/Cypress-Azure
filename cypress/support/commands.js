// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("multiTab", () => {
  cy.window().then((win) => {
    cy.stub(win, "open").callsFake((url) => {
      // Use cy.visit() to navigate to the URL in the same tab
      cy.visit(url);
    });
  });
})


  Cypress.Commands.add("multiTab1", () => {
    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        // Store the URL to be visited
        Cypress.env("newTabUrl", url);
        // Prevent window.open from actually opening a new tab
        return null;
      });
    });
  });
  Cypress.Commands.add("multiTab2", () => {
    // Click the button that would normally open a new tab
    cy.then(() => {
      const newTabUrl = Cypress.env("newTabUrl");
      if (newTabUrl) {
        cy.visit(newTabUrl);
      }
    });
  });

