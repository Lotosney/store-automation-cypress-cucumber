Feature: Registration page
    I want to register myself

    # @focus
    # Scenario: Opening registration page
    #     Given I open Store page
    #     And I click on Account link
    #     And I click on Continue button in I am new customer card
    #     Then I see "Create Account" as title

    @focus
    Scenario: Registering user
        Given I open Store page
        And I click on Account link
        And I click on Continue button in I am new customer card
        And I see "Create Account" as title
        And I fill firstname
        And I fill lastname
        And I fill email as "tester1@testerski.pl"
        And I fill phone
        And I fill adress1
        And I fill city
        And I select region
        And I fill zipcode
        And I fill login name as Lotos2
        And I fill password
        And I fill password confirm
        And I check Privacy Policy
        And I click on continue button
        Then I see My Account as tittle


    @focus
    Scenario: Registering existing user
        Given I open Store page
        And I click on Account link
        And I click on Continue button in I am new customer card
        And I see "Create Account" as title
        And I fill firstname
        And I fill lastname
        And I fill email as "tester1@testerski.pl"
        And I fill phone
        And I fill adress1
        And I fill city
        And I select region
        And I fill zipcode
        And I fill login name as Lotos2
        And I fill password
        And I fill password confirm
        And I check Privacy Policy
        And I click on continue button
        Then I see alert
        And I see error message under login name

            @focus
    Scenario: Registering user with existing email
        Given I open Store page
        And I click on Account link
        And I click on Continue button in I am new customer card
        And I see "Create Account" as title
        And I fill firstname
        And I fill lastname
        And I fill email as "tester1@testerski.pl"
        And I fill phone
        And I fill adress1
        And I fill city
        And I select region
        And I fill zipcode
        And I fill login name as Lotos3
        And I fill password
        And I fill password confirm
        And I check Privacy Policy
        And I click on continue button
        Then I see alert
        And I see no error message under login name
