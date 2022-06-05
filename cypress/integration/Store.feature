Feature: Store main page
  I want to open a store page

  @focus
  Scenario: Opening Store page
    Given I open Store page
    Then I see "A place to practice your automation skills!" in the title
