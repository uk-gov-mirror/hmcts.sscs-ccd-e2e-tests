Feature: Create an bulk-scanned appeal

  Scenario: Should end up in "Appeal Created" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "Appeal Created" state