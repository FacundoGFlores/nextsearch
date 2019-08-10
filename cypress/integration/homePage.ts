describe("Home Page", () => {
  it("should have title", () => {
    cy.visit("/");
    cy.queryByText("Home Page").should("exist");
  });
});
