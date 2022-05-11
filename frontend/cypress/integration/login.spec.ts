describe("Should test the login form", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should render no error at the startup of the page", () => {
        cy.findByTestId("login-form-error").should("not.exist");
    });

    it("Should render error if bad email adress submit", () => {
        cy.login('bad-mail@gmail.com');
        cy.findByTestId("login-form-error").should("exist");
    });

    it("Should not redirect if bad email adress submit", () => {
        cy.login('bad-mail@gmail.com');
        cy.location('pathname').should('eq', '/login');
    });

    it("Should redirect to / if good email adress submit", () => {
        cy.login('cypress-admin@gmail.com');
        cy.location('pathname').should('eq', '/');
    });
});
