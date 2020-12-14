Feature: Issue decision

  @issue-decision @nightly-test
  Scenario: Should end up in "Dormant" state when decision is issued with generate notice is no
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO"
    Then the case should end "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision generate notice no generate

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should end "Dormant" state

    And I see "Final Decision Notice"


  @issue-decision @nightly-test-1
  Scenario: Yes to generate decision and award is about daily living or mobility
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision generate notice yes daily living mobility is no face to face

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

    @issue-decision @nightly-test-1
    Scenario: Yes to generate decision and award is about daily living or mobility
      Given I am signed in as a Case Officer
      And I have a PIP bulk-scanned document with SSCSPE fields

      When I choose the next step "Create new case from exception"
      Then the case should be in "With DWP" state

      When I switch to be a DWPResponse Writer
      When I choose "Upload response"
      And I upload contains further information "NO"
      Then the case should be in "Ready to list" appeal status

      When I switch to be a Judge
      When I choose "Write final decision"
      And I write a final decision generate notice yes daily living mobility is yes face to face
      And I see "Draft Decision Notice"

      When I choose "Issue final decision"
      And I issue a final decision generate decision no
      Then the case should be in "Dormant" appeal status

      And I see "Final Decision Notice"

  @issue-decision-4 @nightly-test-1
    Scenario: Award is about daily living or mobility
      Given I am signed in as a Case Officer
      When I switch to be a Judge
      When I test final decision
      When I choose "Write final decision"
      And I write a final decision generate notice yes daily living mobility is yes face to face

  