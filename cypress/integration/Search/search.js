import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const storepage = "https://automationteststore.com/";
const searchpage =
  "https://automationteststore.com/index.php?rt=product/search&category_id=0";
Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I type Paper Towns in searchbox", () => {
  cy.get("#filter_keyword").type("Paper Towns");
});
And("I click on search icon", () => {
  cy.get(".button-in-search > .fa").click();
});
Then('I see "Paper Towns by John Green" in the title', () => {
  cy.title().should("eq", "Paper Towns by John Green");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I type Paper Towns in searchbox", () => {
  cy.get("#filter_keyword").type("Paper Towns");
});
And("I choose Books category", () => {
  cy.get("#category_65").click();
});
And("I click on search icon", () => {
  cy.get(".button-in-search > .fa").click();
});
Then('I see "Paper Towns by John Green" in the title', () => {
  cy.title().should("eq", "Paper Towns by John Green");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I type Paper Towns in searchbox", () => {
  cy.get("#filter_keyword").type("Paper Towns");
});
And("I choose Makeup category", () => {
  cy.get("#category_36").click();
});
And("I click on search icon", () => {
  cy.get(".button-in-search > .fa").click();
});
Then(`I see "Search" in the title`, () => {
  cy.title().should("eq", "Search");
});

Given("I open Search page", () => {
  cy.visit(searchpage);
});
And("I type Green in searchbox", () => {
  cy.get("#keyword").type("Green");
});
And("I click on search button", () => {
  cy.get("#search_button").click();
});
Then(`I see "Paper Towns by John Green" in the title`, () => {
  cy.title().should("eq", "Paper Towns by John Green");
});

Given("I open Search page", () => {
  cy.visit(searchpage);
});
And("I type Green in searchbox", () => {
  cy.get("#keyword").type("Green");
});
And("I check Search in product descriptions", () => {
  cy.get("#description").click();
});
And("I click on search button", () => {
  cy.get("#search_button").click();
});

Then('I see "Seaweed Conditioner" as first element', () => {
  cy.contains("Seaweed Conditioner");
});
Given("I open Search page", () => {
  cy.visit(searchpage);
});
And("I type Green in searchbox", () => {
  cy.get("#keyword").type("Green");
});
And("I check Search in product model", () => {
  cy.get("#model").click();
});
And("I click on search button", () => {
  cy.get("#search_button").click();
});
Then(`I see "Paper Towns by John Green" in the title`, () => {
  cy.title().should("eq", "Paper Towns by John Green");
});
