Feature: The alternate happy path

  @alt-happy-path @nightly-test
  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information YES for "PIP"
    Then the case should end in "Response received" state

    When I switch to be a Case Officer
    When I choose "Response reviewed"
    And I choose Requires Interlocutory Review No "Response reviewed"
    And I submit "Response reviewed"
    Then the case should end in "Ready to list" state

  
  @happy-path @nightly-test-10 @dwp-upload-response @uc
  Scenario: Should end up in "Ready to List" state when a UC disputed case has been response reviewed
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    And I choose "Upload response"
    And I upload UC further information with disputed General disputed by others Yes and further info Yes
    Then the case should end in "Response received" state

    When I switch to be a Case Officer
    And I choose "Response reviewed"
    When I review the UC received Response
    Then the case should end in "Ready to list" state