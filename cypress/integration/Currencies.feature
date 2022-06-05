Feature: Currencies change
    I want to check currency change

    @focus
    Scenario: Checking Skinsheen Bronzer Stick price in USD
        Given I open Store page
        Then I see Skinsheen Bronzer Stick price as $29.50
    @focus
    Scenario: Checking Skinsheen Bronzer Stick price in GBP
        Given I open Store page
        And I see Skinsheen Bronzer Stick price as $29.50
        And I change currency to GBP
        Then I see Skinsheen Bronzer Stick price as £23.40

    @focus
    Scenario: Checking Flat shipping price in GBP
        Given I open Store page
        And I change currency to GBP
        And I click on Skinsheen Bronzer Stick
        And I click on Add to Cart button
        Then I see £1.59 in flat shipping rate

    @focus
    Scenario: Checking Skinsheen Bronzer Stick price in EUR
        Given I open Store page
        And I see Skinsheen Bronzer Stick price as $29.50
        And I change currency to EUR
        Then I see Skinsheen Bronzer Stick price as 27.69€

    @focus
    Scenario: Checking Flat shipping price in EUR
        Given I open Store page
        And I change currency to EUR
        And I click on Skinsheen Bronzer Stick
        And I click on Add to Cart button
        Then I see 1.88€ in flat shipping rate