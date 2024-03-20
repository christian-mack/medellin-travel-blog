describe("Navigation", () => {
  it("successfully loads and renders the about-us page", () => {
    cy.visit("http://localhost:3000/about-us");

    cy.url().should("include", "/about-us");
  });
});
