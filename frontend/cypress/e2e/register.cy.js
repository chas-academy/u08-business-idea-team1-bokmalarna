describe("Register new user", () => {
  it("succesfully loads", () => {
    cy.visit("/");
    cy.contains("Register").click();
    cy.url().should("include", "register");
    cy.get('[id="firstName"]').type("Happy").should("have.value", "Happy");
    cy.get('[id="lastName"').type("Tester").should("have.value", "Tester");
    cy.get('[id="city"').type("Utopia").should("have.value", "Utopia");
    cy.get('[id="email"')
      .type("happy@my.test")
      .should("have.value", "happy@my.test");
    cy.get('[id="password"').type("happy123").should("have.value", "happy123");
    cy.get('[id="confirmPassword"')
      .type("happy123")
      .should("have.value", "happy123");
    cy.contains("Register User").click();
  });
});
