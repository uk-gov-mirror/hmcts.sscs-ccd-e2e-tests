Feature: The lapse

@lapse @nightly-test
  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I choose "Lapse appeal"
    And I set DWP State to Lapsed "Lapse appeal"
    And I submit "Lapse appeal"
    Then the case should end "With DWP" state

    When I switch to be a Judge
    When I choose "Confirm lapsed"
    And I submit "Confirm lapsed"
    Then the case should end "Dormant" state