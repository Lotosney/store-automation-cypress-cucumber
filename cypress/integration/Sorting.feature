Feature: Sorting
    I want to search books

    @focus
    Scenario: Sorting by Date Old>New
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        Then I see "Seaweed Conditioner" as first element

    @focus
    Scenario: Sorting A>Z
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        And I change sorting to A>Z
        Then I see "Calvin Klein Obsession For Women EDP Spray" as first element

    @focus
    Scenario: Sorting Z>A
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        And I change sorting to Z>A
        Then I see "Seaweed Conditioner" as first element
    @focus
    Scenario: Sorting Low>High
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        And I change sorting to Low>High
        Then I see "Paper Towns by John Green" as first element

    @focus
    Scenario: Sorting High>Low
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        And I change sorting to High>Low
        Then I see "Flora By Gucci Eau Fraiche" as first element

            @focus
    Scenario: Sorting Rating highest
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        And I change sorting to Rating Highest
        Then I see "Flora By Gucci Eau Fraiche" as first element

    @focus
    Scenario: Sorting rating lowest
        Given I open Search page
        And  I type Green in searchbox
        And I check Search in product descriptions
        And I click on search button
        And I change sorting to Rating Lowest
        Then I see "Seaweed Conditioner" as first element