import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const storepage = "https://automationteststore.com/";

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Account link", () => {
  cy.get(
    '#main_menu_top > [data-id="menu_account"] > .top > .menu_text'
  ).click();
});
And("I click on Continue button in I am new customer card", () => {
  cy.get("#accountFrm > fieldset > .btn").click();
});
Then('I see "Create Account" as title', () => {
  cy.title().should("eq", "Create Account");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Account link", () => {
  cy.get(
    '#main_menu_top > [data-id="menu_account"] > .top > .menu_text'
  ).click();
});
And("I click on Continue button in I am new customer card", () => {
  cy.get("#accountFrm > fieldset > .btn").click();
});
And('I see "Create Account" as title', () => {
  cy.title().should("eq", "Create Account");
});
And("I fill firstname", () => {
  cy.get("#AccountFrm_firstname").type("Tester");
});
And("I fill lastname", () => {
  cy.get("#AccountFrm_lastname").type("Testerski");
});

And('I fill email as "tester1@testerski.pl"', () => {
  cy.get("#AccountFrm_email").type("tester1@testerski.pl");
});

And("I fill phone", () => {
  cy.get("#AccountFrm_telephone").type("111222333");
});
And("I fill adress1", () => {
  cy.get("#AccountFrm_address_1").type("addreess");
});
And("I fill city", () => {
  cy.get("#AccountFrm_city").type("city");
});
And("I select region", () => {
  cy.get("#AccountFrm_zone_id").select("Cheshire");
});
And("I fill zipcode", () => {
  cy.get("#AccountFrm_postcode").type("123 123");
});
And("I fill login name as Lotos2", () => {
  cy.get("#AccountFrm_loginname").type("Lotos2");
});
And("I fill password", () => {
  cy.get("#AccountFrm_password").type("1234");
});
And("I fill password confirm", () => {
  cy.get("#AccountFrm_confirm").type("1234");
});
And("I check Privacy Policy", () => {
  cy.get("#AccountFrm_agree").click();
});
And("I click on continue button", () => {
  cy.get(".col-md-2 > .btn").click();
});
Then("I see My Account as tittle", () => {
  cy.title().should("eq", "My account");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Account link", () => {
  cy.get(
    '#main_menu_top > [data-id="menu_account"] > .top > .menu_text'
  ).click();
});
And("I click on Continue button in I am new customer card", () => {
  cy.get("#accountFrm > fieldset > .btn").click();
});
And('I see "Create Account" as title', () => {
  cy.title().should("eq", "Create Account");
});
And("I fill firstname", () => {
  cy.get("#AccountFrm_firstname").type("Tester");
});
And("I fill lastname", () => {
  cy.get("#AccountFrm_lastname").type("Testerski");
});

And('I fill email as "tester1@testerski.pl"', () => {
  cy.get("#AccountFrm_email").type("tester1@testerski.pl");
});

And("I fill phone", () => {
  cy.get("#AccountFrm_telephone").type("111222333");
});
And("I fill adress1", () => {
  cy.get("#AccountFrm_address_1").type("addreess");
});
And("I fill city", () => {
  cy.get("#AccountFrm_city").type("city");
});
And("I select region", () => {
  cy.get("#AccountFrm_zone_id").select("Cheshire");
});
And("I fill zipcode", () => {
  cy.get("#AccountFrm_postcode").type("123 123");
});
And("I fill login name as Lotos2", () => {
  cy.get("#AccountFrm_loginname").type("Lotos2");
});
And("I fill password", () => {
  cy.get("#AccountFrm_password").type("1234");
});
And("I fill password confirm", () => {
  cy.get("#AccountFrm_confirm").type("1234");
});
And("I check Privacy Policy", () => {
  cy.get("#AccountFrm_agree").click();
});
And("I click on continue button", () => {
  cy.get(".col-md-2 > .btn").click();
});
Then("I see alert", () => {
  cy.get(".alert").should(
    "have.text",
    "\n×\nError: E-Mail Address is already registered!"
  );
});
And("I see error message under login name", () => {
  cy.get(".has-error > .help-block").should(
    "have.text",
    "This login name is not available. Try different login name!"
  );
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Account link", () => {
  cy.get(
    '#main_menu_top > [data-id="menu_account"] > .top > .menu_text'
  ).click();
});
And("I click on Continue button in I am new customer card", () => {
  cy.get("#accountFrm > fieldset > .btn").click();
});
And('I see "Create Account" as title', () => {
  cy.title().should("eq", "Create Account");
});
And("I fill firstname", () => {
  cy.get("#AccountFrm_firstname").type("Tester");
});
And("I fill lastname", () => {
  cy.get("#AccountFrm_lastname").type("Testerski");
});

And('I fill email as "tester1@testerski.pl"', () => {
  cy.get("#AccountFrm_email").type("tester1@testerski.pl");
});

And("I fill phone", () => {
  cy.get("#AccountFrm_telephone").type("111222333");
});
And("I fill adress1", () => {
  cy.get("#AccountFrm_address_1").type("addreess");
});
And("I fill city", () => {
  cy.get("#AccountFrm_city").type("city");
});
And("I select region", () => {
  cy.get("#AccountFrm_zone_id").select("Cheshire");
});
And("I fill zipcode", () => {
  cy.get("#AccountFrm_postcode").type("123 123");
});
And("I fill login name as Lotos3", () => {
  cy.get("#AccountFrm_loginname").type("Lotos3");
});
And("I fill password", () => {
  cy.get("#AccountFrm_password").type("1234");
});
And("I fill password confirm", () => {
  cy.get("#AccountFrm_confirm").type("1234");
});
And("I check Privacy Policy", () => {
  cy.get("#AccountFrm_agree").click();
});
And("I click on continue button", () => {
  cy.get(".col-md-2 > .btn").click();
});
Then("I see alert", () => {
  cy.get(".alert").should(
    "have.text",
    "Error: E-Mail Address is already registered!"
  );
});
And("I see no error message under login name", () => {
  cy.get(".has-error > .help-block").should("not.exist");
});
