@bundle @nightly-test-555
Feature: Create bundle for a case

  Scenario: Verify create bundle event for cases
    Given I preset up a test case
    And I switch to be a Case Officer
    When I navigate to the case
    And I choose "Admin - send to With DWP"
    Then the case should be in "With DWP" state
