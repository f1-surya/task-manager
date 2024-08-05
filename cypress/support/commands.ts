Cypress.Commands.add("login", (email, password) => {
  cy.session(
    [email, password],
    () => {
      cy.visit("/login");
      cy.get("input[name=email]").type(email);
      cy.get("input[name=password]").type(password);
      cy.get("button[type=submit]").click();
      cy.url().should("include", "/tasks");
    },
    {
      validate: () => {
        cy.getCookie("session").should("exist");
      },
    },
  );
});
