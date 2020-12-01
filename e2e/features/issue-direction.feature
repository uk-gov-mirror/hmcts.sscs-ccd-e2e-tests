Feature: Issue direction
  
  @issue-direction  @nightly-test
  Scenario: Judge should be able to proceed incomplete application without mrn-date
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with incomplete fields
    When I choose "Create new case from exception" for an incomplete application
    Then the case should be in "Incomplete Application" state

    When I choose "Send to interloc - pre-valid"
    And I submit the interloc reason
    Then the case should end "Interlocutory Review - Pre-Valid" state

    When I switch to be a Judge
    And I choose "Issue directions notice"
    When I allow the appeal to proceed
    Then the case should end "With DWP" state
