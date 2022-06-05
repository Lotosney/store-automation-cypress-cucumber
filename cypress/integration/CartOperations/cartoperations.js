import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const storepage = "https://automationteststore.com/";

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

Then("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});
Then("I see 1 in item quantity", () => {
  cy.get("#cart_quantity50").should("have.value", "1");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});

Then("I see $29.50 in item unit price", () => {
  cy.get("tbody > :nth-child(2) > :nth-child(4)").should("have.text", "$29.50");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});

Then("I see $29.50 in item total value", () => {
  cy.get("tbody > :nth-child(2) > :nth-child(6)").should("have.text", "$29.50");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});

And("I change item quantity to 2", () => {
  cy.get("#cart_quantity50").clear().type("2");
});
Then("I see 2 in item quantity", () => {
  cy.get("#cart_quantity50").should("have.value", "2");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});
And("I change item quantity to 2", () => {
  cy.get("#cart_quantity50").clear().type("2");
});
And("I click on update button", () => {
  cy.get("#cart_update").click();
});
Then("I see $29.50 in item unit price", () => {
  cy.get("tbody > :nth-child(2) > :nth-child(4)").should("have.text", "$29.50");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});
And("I change item quantity to 2", () => {
  cy.get("#cart_quantity50").clear().type("2");
});
And("I click on  update button", () => {
  cy.get("#cart_update").click();
});
Then("I see $59.00 in item total value", () => {
  cy.get("tbody > :nth-child(2) > :nth-child(6)").should("have.text", "$59.00");
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});
And("I see 1 in item quantity", () => {
  cy.get("#cart_quantity50").should("have.value", "1");
});
And("I click on remove button", () => {
    cy.xpath('//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[7]/a').click();
});
Then('I see "Your shopping cart is empty!" message', () => {
  cy.xpath('//*[@id="maincontainer"]/div/div/div/div/text()').should(
    "have.text",
    "\n\n\tYour shopping cart is empty!\t\n\t\n\n"
  );
});

Given("I open Store page", () => {
  cy.visit(storepage);
});
And("I click on Skinsheen Bronzer Stick", () => {
  cy.get(
    "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
  ).click();
});
And("I see Skinsheen Bronzer Stick in the title", () => {
  cy.title().should("eq", "Skinsheen Bronzer Stick");
});
And("I click on Add to Cart Button", () => {
  cy.get(".cart").click();
});

And("I see Shopping Cart in the title", () => {
  cy.title().should("eq", "Shopping Cart");
});
And("I see 1 in item quantity", () => {
  cy.get("#cart_quantity50").should("have.value", "1");
});
And("I click on checkout button", () => {
  cy.get("#cart_checkout1").click();
});
Then("I see Account Login in the title", () => {
  cy.title().should("eq", "Account Login");
});


Given("I open Store page", () => {
    cy.visit(storepage);
  });
  And("I click on Skinsheen Bronzer Stick", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
    ).click();
  });
  And("I see Skinsheen Bronzer Stick in the title", () => {
    cy.title().should("eq", "Skinsheen Bronzer Stick");
  });

  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  And("I see Shopping Cart in the title", () => {
    cy.title().should("eq", "Shopping Cart");
  });
  And("I click on Continue Shopping button", () => {
    cy.get('.col-md-6 > .btn-default').click();
  });
  And("I click on  Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15", () => {
    cy.get('.side_prd_list > :nth-child(1) > .productname').click();
  });
  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  Then("I see $71.50 in cart dropdown", () => {
    cy.get('.dropdown-toggle > .cart_total').should("have.text", "$71.50");
  });
  


  Given("I open Store page", () => {
    cy.visit(storepage);
  });
  And("I click on Skinsheen Bronzer Stick", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
    ).click();
  });
  And("I see Skinsheen Bronzer Stick in the title", () => {
    cy.title().should("eq", "Skinsheen Bronzer Stick");
  });

  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  And("I see Shopping Cart in the title", () => {
    cy.title().should("eq", "Shopping Cart");
  });
  And("I click on Continue Shopping button", () => {
    cy.get('.col-md-6 > .btn-default').click();
  });
  And("I click on  Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15", () => {
    cy.get('.side_prd_list > :nth-child(1) > .productname').click();
  });
  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  And("I see 71.50 in cart dropdown", () => {
    cy.get('.dropdown-toggle > .cart_total').should("have.text", "$71.50");
  });
  And("I click on remove button", () => {
    cy.xpath('//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[7]/a').click();
  });
  Then("I see $42.00 in cart dropdown", () => {
    cy.get('.dropdown-toggle > .cart_total').should("have.text", "$42.00");
  });

  Given("I open Store page", () => {
    cy.visit(storepage);
  });
  And("I click on Skinsheen Bronzer Stick", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
    ).click();
  });
  And("I see Skinsheen Bronzer Stick in the title", () => {
    cy.title().should("eq", "Skinsheen Bronzer Stick");
  });
  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  
  Then("I see $2.00 in flat shipping rate", () => {
    cy.get(':nth-child(2) > :nth-child(2) > .bold').should("have.text", "$2.00");
  });

  Given("I open Store page", () => {
    cy.visit(storepage);
  });
  And("I click on Skinsheen Bronzer Stick", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
    ).click();
  });
  And("I see Skinsheen Bronzer Stick in the title", () => {
    cy.title().should("eq", "Skinsheen Bronzer Stick");
  });
  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  And("I click on Continue Shopping button", () => {
    cy.get('.col-md-6 > .btn-default').click();
  });
  And("I click on  Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15", () => {
    cy.get('.side_prd_list > :nth-child(1) > .productname').click();
  });
  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  Then("I see $2.00 in flat shipping rate", () => {
    cy.get(':nth-child(2) > :nth-child(2) > .bold').should("have.text", "$2.00");
  });

  Given("I open Store page", () => {
    cy.visit(storepage);
  });
  And("I click on Skinsheen Bronzer Stick", () => {
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img"
    ).click();
  });
  And("I see Skinsheen Bronzer Stick in the title", () => {
    cy.title().should("eq", "Skinsheen Bronzer Stick");
  });
  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  And("I click on Continue Shopping button", () => {
    cy.get('.col-md-6 > .btn-default').click();
  });
  And("I click on  Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15", () => {
    cy.get('.side_prd_list > :nth-child(1) > .productname').click();
  });
  And("I click on Add to Cart Button", () => {
    cy.get(".cart").click();
  });
  Then("I see $73.50 in Total", () => {
    cy.get(':nth-child(3) > :nth-child(2) > .bold').should("have.text", "$73.50");
  });