Feature: The happy path

  @happy-path @nightly-test @dwp-upload-response
  Scenario: Should end up in "Ready to list" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with all fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Case Officer
    Then the case should end "Ready to list" state

  @happy-path @nightly-test @dwp-upload-response @uc
  Scenario: Should end up in "Ready to List" state when a UC disputed case has been response reviewed
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with all fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    And I choose "Upload response"
    And I upload UC further information with disputed General
    Then the case should be in "Response received" appeal status

    When I switch to be a Case Officer
    And I choose "Response reviewed"
    When I review the UC received Response
    Then the case should be in "Ready to list" appeal status
    And the case should end "Ready to list" state