@happy-path-user @nightly-test
Feature: The happy path

  Scenario: Should end up in "Ready to list" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a Case Officer
    When I choose "Upload response"
    And I upload contains further information "NO" for "PIP"
    Then the case should end "Ready to list" state
