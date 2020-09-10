Feature: The withdrawal

  @withdrawal @nightly-test
  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I choose "Admin Appeal Withdrawn"
    And I click submit withdrawal "Admin Appeal Withdrawn"
    And I submit "Admin Appeal Withdrawn"
    Then the case should end "Dormant" state

    When I choose "Dwp Action Withdrawal"
    And I submit "Dwp Action Withdrawal"
    Then the case should end "Dormant" state
