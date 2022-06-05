Feature: Cart Operations
    I want to open a test cart operations

    @focus
    Scenario: Adding item to cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        Then I see Shopping Cart in the title


    @focus
    Scenario: Checking item quantity in cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        Then I see 1 in item quantity

    @focus
    Scenario: Checking item unit price in cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        Then I see $29.50 in item unit price

    @focus
    Scenario: Checking item total value in cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        Then I see $29.50 in item total value

    @focus
    Scenario: Changing item quantity in cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        And I change item quantity to 2
        Then I see 2 in item quantity


    @focus
    Scenario: Checking item unit price in after quantity change in  cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        And I change item quantity to 2
        And I click on update button
        Then I see $29.50 in item unit price

    @focus
    Scenario: Checking item total value after quantity change  in cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        And I change item quantity to 2
        And I click on update button
        Then I see $59.00 in item total value


    @focus
    Scenario: Removing item from cart
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        And I see 1 in item quantity
        And I click on remove button
        Then I see "Your shopping cart is empty!" message

    @focus
    Scenario: Checkout
        Given I open Store page
        And I click on Skinsheen Bronzer Stick
        And I see Skinsheen Bronzer Stick in the title
        And I click on Add to Cart Button
        And I see Shopping Cart in the title
        And I see 1 in item quantity
        And I click on checkout button
        Then I see Account Login in the title