import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const storepage = "https://automationteststore.com/";

Given("I open Store page", () => {
  cy.visit(storepage);
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("eq", "A place to practice your automation skills!");
});
