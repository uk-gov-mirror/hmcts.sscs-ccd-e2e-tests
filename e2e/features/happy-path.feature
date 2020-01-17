Feature: The happy path

  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I choose "Upload response"
    And I upload contains further information "NO"
    Then the case should end "Response received" state