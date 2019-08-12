describe("Home Page", () => {
  it("Check default user list", () => {
    cy.visit("/");
    cy.queryByText("No users found.").should("exist");
  });
  it("Check user can search", () => {
    // cy.server()
    //   .route("POST", /graphql/)
    //   .as("getUsers");
    cy.visit("/");
    cy.queryByPlaceholderText("Search...").focus();
    cy.queryByPlaceholderText("Search...").type("foo");
    cy.queryByPlaceholderText("Search...").blur();
    cy.queryByText("Loading...").should("exist");
    // I know it is an anti-pattern but somehow aliasing graphql didnt work
    cy.wait(500);
    cy.queryByText("Loading...").should("not.exist");
  });
});
