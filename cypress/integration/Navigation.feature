Feature: Navigation
  I want to navigate between categories
  Background: Before Each
    Given I open Store page
    @focus
  Scenario: Navigate to Apparel page
    And I click on Apparel link in navbar
    Then I see "Apparel & accessories" in the title

    @focus
  Scenario: Navigate to Makeup page
    And I click on MAKEUP link in navbar
    Then I see "Makeup" in the title

        @focus
  Scenario: Navigate to Fragrance page
    And I click on FRAGRANCE link in navbar
    Then I see "Fragrance" in the title

            @focus
  Scenario: Navigate to Men page
    And I click on MEN link in navbar
    Then I see "Men" in the title

                @focus
  Scenario: Navigate to Hair Care page
    And I click on HAIR CARE link in navbar
    Then I see "Hair Care" in the title