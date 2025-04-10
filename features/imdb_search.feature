Feature: IMDB Movie Search

  Scenario: Searching for a known movie by title
    Given I am on the IMDB homepage
    When I search for "Inception"
    Then I should see "Inception" in the page title or main heading