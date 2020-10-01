Feature: Issue decision

  @issue-decision @nightly-test
  Scenario: Should end up in "Ready to list" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision "Allowed"
