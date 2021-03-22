@issue-direction
Feature: Issue direction

  Background
    Given I presetup an "PIP" SYA case
    And I am signed in as a Case Officer

  @nightly-test @TA-580
  Scenario: Judge should be able to proceed incomplete application without mrn-date
    When I choose "Create new case from exception" for an incomplete application
    Then the case should be in "Incomplete Application" state

    When I choose "Send to interloc - pre-valid"
    And I submit the interloc reason
    Then the case should end in "Interlocutory Review - Pre-Valid" state

    When I switch to be a Judge
    And I choose "Issue directions notice"
    When I allow the appeal to proceed
    Then the case should end in "With DWP" state
