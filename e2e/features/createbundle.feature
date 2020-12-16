@bundle @nightly-test
Feature: Create bundle for a case

  Scenario: Verify create bundle event for cases
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a Case Officer
    When I choose "Upload response"
    And I upload contains further information "NO" for "PIP"
    Then the case should end "Ready to list" state

    When I switch to be a Case Officer
    When I choose the next step "Create a bundle"
    Then the bundles should be successfully listed in "History" tab
    And the case bundle details should be listed in "Bundles" tab
