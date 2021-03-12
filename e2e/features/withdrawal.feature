Feature: The withdrawal

  @withdrawal  @nightly-test @migrated-to-exui
  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I preset up a test case
    And I am signed in as a Case Officer
    Given I navigate to an existing case
    And I choose "Admin - send to With DWP"
    Given I complete the event
    Then the case should be in "With DWP" state

    When I choose "Admin Appeal Withdrawn"
    And I click submit withdrawal "Admin Appeal Withdrawn"
    And I submit "Admin Appeal Withdrawn"
    Then the case should be in "Dormant" state

    When I choose "Dwp Action Withdrawal"
    And I submit "Dwp Action Withdrawal"
    Then the case should be in "Dormant" state