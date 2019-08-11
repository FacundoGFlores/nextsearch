describe("Home Page", () => {
  it("Check default user list", () => {
    cy.visit("/");
    cy.queryByText("No users found.").should("exist");
  });
  it("Check user can search", () => {
    cy.visit("/");
    cy.queryByPlaceholderText("Search...").focus();
    cy.queryByPlaceholderText("Search...").type("foo");
    cy.queryByPlaceholderText("Search...").blur();
    cy.queryByText("Loading...").should("exist");
  });
});
