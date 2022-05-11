const NOT_CONNECTED_LINK_TEST_ID = [
    "header-link-not-connected-home",
    "header-link-clean-code",
    "header-link-login"
];
const CONNECTED_LINK_TEST_ID = ["header-link-home", "header-link-todos"];

const CONNECTED_ADMIN_LINK_TEST_ID = ["header-link-users"];
describe("Should test the header", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Should render right links when user not connected", () => {
        NOT_CONNECTED_LINK_TEST_ID.forEach((testId) => cy.findByTestId(testId).should("exist"));
        [...CONNECTED_LINK_TEST_ID, ...CONNECTED_ADMIN_LINK_TEST_ID].forEach((testId) =>
            cy.findByTestId(testId).should("not.exist")
        );
        cy.findByTestId("logout-button").should("not.exist");
    });

    it("Should render right links when simple user connected", () => {
        cy.login("cypress-user@gmail.com");
        CONNECTED_LINK_TEST_ID.forEach((testId) => cy.findByTestId(testId).should("exist"));
        [...NOT_CONNECTED_LINK_TEST_ID, ...CONNECTED_ADMIN_LINK_TEST_ID].forEach((testId) =>
            cy.findByTestId(testId).should("not.exist")
        );
        cy.findByTestId("logout-button").should("exist");

    });

    it("Should render right links when admin user connected", () => {
        cy.login("cypress-admin@gmail.com");
        NOT_CONNECTED_LINK_TEST_ID.forEach((testId) => cy.findByTestId(testId).should("not.exist"));
        [...CONNECTED_LINK_TEST_ID, ...CONNECTED_ADMIN_LINK_TEST_ID].forEach((testId) =>
            cy.findByTestId(testId).should("exist")
        );
        cy.findByTestId("logout-button").should("exist");

    });
});
