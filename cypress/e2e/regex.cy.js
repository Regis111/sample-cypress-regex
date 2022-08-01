/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("can add new todo items", () => {
    cy.get("[data-test=new-todo]").type("cat{enter}");
    cy.get("[data-test=new-todo]").type("concatenate{enter}");
    cy.get("[data-test=new-todo]").type("catalyze{enter}");

    cy.get("li .view").contains(new RegExp("\bcat\b")).find(".toggle").click();
  });
});
