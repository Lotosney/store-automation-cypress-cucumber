Feature: Searching
    I want to test searching 

    @focus
    Scenario: Searching Paper Towns with no category selection
        Given I open Store page
        And  I type Paper Towns in searchbox
        And I click on search icon
        Then I see "Paper Towns by John Green" in the title

    @focus
    Scenario: Searching Paper Towns with correct category selection
        Given I open Store page
        And  I type Paper Towns in searchbox
        And I choose Books category
        And I click on search icon
        Then I see "Paper Towns by John Green" in the title
    @focus
    Scenario: Searching Paper Towns with incorrect category selection
        Given I open Store page
        And  I type Paper Towns in searchbox
        And I choose Makeup category
        And I click on search icon
        Then I see "Search" in the title

    @focus
    Scenario: Searching Green in search subpage page
        Given I open Search page
        And  I type Green in searchbox
        And I click on search button
        Then I see "Paper Towns by John Green" in the title

    @focus
    Scenario: Searching Green in search subpage page with search in product descriptions
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        Then I see "Seaweed Conditioner" as first element

    @focus
    Scenario: Searching Green in search subpage page with search in product model
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product model
        And I click on search button
        Then I see "Paper Towns by John Green" in the title