describe("Login user", () => {
  it("succesfully loads", () => {
    cy.visit("/");
    cy.contains("Log In").click();
    cy.url().should("include", "login");
    cy.get("#email")
      .type("happy@my.test")
      .should("have.value", "happy@my.test");
    cy.get("#password").type("happy123").should("have.value", "happy123");
    cy.contains("Submit").click();
    cy.url().should("include", "/dashboard");
    cy.getCookie("access_token").should("exist");
  });
});
