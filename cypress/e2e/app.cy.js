describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/about-us");

    cy.url().should("include", "/about-us");
  });
});
