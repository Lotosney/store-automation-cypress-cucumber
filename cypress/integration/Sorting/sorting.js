import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

const searchpage =
  "https://automationteststore.com/index.php?rt=product/search&category_id=0";

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
  cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
  cy.title().should("eq", "Seaweed Conditioner");
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
And("I change sorting to A>Z", () => {
  cy.get("#sort").select("Name A - Z");
});

Then(
  'I see "Calvin Klein Obsession For Women EDP Spray" as first element',
  () => {
    cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
    cy.title().should("eq", "Calvin Klein Obsession For Women EDP Spray");
  }
);

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
And("I change sorting to Z>A", () => {
  cy.get("#sort").select("Name Z - A");
});

Then('I see "Seaweed Conditioner" as first element', () => {
  cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
  cy.title().should("eq", "Seaweed Conditioner");
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
And("I change sorting to Low>High", () => {
  cy.get("#sort").select("Price Low > High");
});

Then('I see "Paper Towns by John Green" as first element', () => {
  cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
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
And("I change sorting to High>Low", () => {
  cy.get("#sort").select("Price High > Low");
});

Then('I see "Flora By Gucci Eau Fraiche" as first element', () => {
  cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
  cy.title().should("eq", "Flora By Gucci Eau Fraiche");
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
And("I change sorting to Rating Highest", () => {
  cy.get("#sort").select("Rating Highest");
});

Then('I see "Flora By Gucci Eau Fraiche" as first element', () => {
  cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
  cy.title().should("eq", "Flora By Gucci Eau Fraiche");
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
And("I change sorting to Rating Lowest", () => {
  cy.get("#sort").select("Rating Lowest");
});

Then('I see "Seaweed Conditioner" as first element', () => {
  cy.get(":nth-child(1) > .thumbnail > :nth-child(1) > img").click();
  cy.title().should("eq", "Seaweed Conditioner");
});
