describe("Search for a book", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.contains("Search").click();
    cy.url().should("include", "search");
    cy.get("#formGroupExampleInput")
      .type("Bookish")
      .should("have.value", "Bookish");
    cy.get("#location").type("Stockholm").should("have.value", "Stockholm");
    cy.contains("Search").click();
  });
});
