@reinstatement @nightly-test
Feature: The Reinstatement functionality

  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Action further evidence"
    And I fill the further evidence form
    Then the case should have successfully processed "Action further evidence" event

    When I switch to be a Judge
    When I choose "Issue directions notice"
    And I fill the direction notice form
    Then the case should be "Granted" permissions to proceed

    
