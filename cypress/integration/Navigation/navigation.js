import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const storepage = "https://automationteststore.com/";
Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I click on Apparel link in navbar", () => {
  cy.get(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=68"]'
  ).click();
});

Then(`I see "Apparel & accessories" in the title`, (title) => {
  cy.title().should("eq", "Apparel & accessories");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I click on MAKEUP link in navbar", () => {
  cy.get(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=36"]'
  ).click();
});

Then(`I see "Makeup" in the title`, (title) => {
  cy.title().should("eq", "Makeup");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I click on SKINCARE link in navbar", () => {
  cy.get(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=43"]'
  ).click();
});

Then(`I see "Skincare" in the title`, (title) => {
  cy.title().should("eq", "Skincare");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I click on FRAGRANCE link in navbar", () => {
  cy.get(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=49"]'
  ).click();
});

Then(`I see "Fragrance" in the title`, (title) => {
  cy.title().should("eq", "Fragrance");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I click on MEN link in navbar", () => {
  cy.get(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=58"]'
  ).click();
});

Then(`I see "Men" in the title`, (title) => {
  cy.title().should("eq", "Men");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I click on HAIR CARE link in navbar", () => {
  cy.get(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=52"]'
  ).click();
});

Then(`I see "Hair Care" in the title`, (title) => {
  cy.title().should("eq", "Hair Care");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I click on BOOKS link in navbar", () => {
  cy.get(
    '[href="https://automationteststore.com/index.php?rt=product/category&path=65"]'
  ).click();
});

Then(`I see "Books" in the title`, (title) => {
  cy.title().should("eq", "Books");
});
