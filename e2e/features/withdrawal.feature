Feature: The withdrawal

  @withdrawal  @nightly-test @migrated-to-exui
  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I preset up a test case
    And I am signed in as a Case Officer
    Then The page is accessible
    Given I navigate to an existing case
    Then The page is accessible
    And I choose "Admin - send to With DWP"
    Then The page is accessible
    Given I complete the event
    Then the case should be in "With DWP" state
    And The page is accessible

    When I choose "Admin Appeal Withdrawn"
    And The page is accessible
    And I click submit withdrawal "Admin Appeal Withdrawn"
    And The page is accessible
    And I submit "Admin Appeal Withdrawn"
    Then the case should be in "Dormant" state

    When I choose "Dwp Action Withdrawal"
    And The page is accessible
    And I submit "Dwp Action Withdrawal"
    Then the case should be in "Dormant" state