Feature: User authentication

  Scenario: Should show Case List after a user has signed in as a Case Officer
    Given I am signed in as a Case Officer
    When I go to the Case List
    Then I should see the Case List page
