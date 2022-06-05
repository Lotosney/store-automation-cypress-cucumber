import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const storepage = "https://automationteststore.com/";

Given("I open Store page", () => {
  cy.visit(storepage);
});

Then("I see Skinsheen Bronzer Stick price as $29.50", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .price > .oneprice"
  ).should("have.text", "$29.50");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I see Skinsheen Bronzer Stick price as $29.50", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .price > .oneprice"
  ).should("have.text", "$29.50");
});
And("I change currency to GBP", () => {
  cy.get(".block_6 > .nav > .dropdown > .dropdown-toggle").click();
  cy.get(
    ".block_6 > .nav > .dropdown > .dropdown-menu > :nth-child(2) > a"
  ).click();
});
Then("I see Skinsheen Bronzer Stick price as £23.40", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .price > .oneprice"
  ).should("have.text", "£23.40");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I see Skinsheen Bronzer Stick price as $29.50", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .price > .oneprice"
  ).should("have.text", "$29.50");
});
And("I change currency to GBP", () => {
  cy.get(".block_6 > .nav > .dropdown > .dropdown-toggle").click();
  cy.get(
    ".block_6 > .nav > .dropdown > .dropdown-menu > :nth-child(2) > a"
  ).click();
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I click on Add to Cart button", () => {
  cy.get(".cart").click();
});
Then("I see £1.59 in flat shipping rate", () => {
  cy.get(":nth-child(2) > :nth-child(2) > .bold").should("have.text", "£1.59");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I see Skinsheen Bronzer Stick price as $29.50", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .price > .oneprice"
  ).should("have.text", "$29.50");
});
And("I change currency to EUR", () => {
  cy.get(".block_6 > .nav > .dropdown > .dropdown-toggle").click();
  cy.get(
    ".block_6 > .nav > .dropdown > .dropdown-menu > :nth-child(1) > a"
  ).click();
});
Then("I see Skinsheen Bronzer Stick price as 27.69€", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .price > .oneprice"
  ).should("have.text", "27.69€");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});

And("I see Skinsheen Bronzer Stick price as $29.50", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .price > .oneprice"
  ).should("have.text", "$29.50");
});
And("I change currency to EUR", () => {
  cy.get(".block_6 > .nav > .dropdown > .dropdown-toggle").click();
  cy.get(
    ".block_6 > .nav > .dropdown > .dropdown-menu > :nth-child(1) > a"
  ).click();
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I click on Add to Cart button", () => {
  cy.get(".cart").click();
});
Then("I see 1.88€ in flat shipping rate", () => {
  cy.get(":nth-child(2) > :nth-child(2) > .bold").should("have.text", "1.88€");
});
