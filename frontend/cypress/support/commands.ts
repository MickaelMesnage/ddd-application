declare namespace Cypress {
    interface Chainable {
        login(email: string): void;
        logout(): void;
    }
}

Cypress.Commands.add("login", (email: string) => {
    cy.visit("/login");
    cy.findByTestId("login-form-email").type(email);
    cy.findByTestId("login-form-submit").click();
});

Cypress.Commands.add("logout", () => {
    cy.visit("/");
    cy.findByTestId("logout-button").click();
});
