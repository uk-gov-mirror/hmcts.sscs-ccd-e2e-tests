Feature: Create an bulk-scanned appeal

  Scenario: Should end up in "appeal created" state when all mandatory fields are present
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all mandatory fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "Case created" state