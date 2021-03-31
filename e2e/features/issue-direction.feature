@migrated-to-exui
Feature: Issue direction

  Background:
    Given I presetup an "PIP" SYA case
    And I am signed in as a Case Officer
    And I navigate to an existing case

  @nightly-test @issue-direction
  Scenario: Judge should be able to proceed incomplete application without mrn-date
    Then the case should be in "With DWP" state

    And I choose "Admin - send to Incomplete App"
    And The page is accessible
    And I complete the event
    Then the case should be in "Incomplete Application" state

    And I choose "Send to interloc - pre-valid"
    And The page is accessible
    And I submit the interloc reason
    Then the case should be in "Interlocutory Review - Pre-Valid" state

    When I switch to be a Judge
    And I choose "Issue directions notice"
    And I allow the appeal to proceed
    Then I  should see "Directions Notice" in documents tab
