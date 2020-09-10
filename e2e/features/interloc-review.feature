Feature: The interloc review

@interloc @nightly-test
  Scenario: Should end up in "With DWP" state when ALL fields are present
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "YES"
    Then the case should end "Response received" state

    When I switch to be a Case Officer
    When I choose "Response reviewed"
    And I choose Requires Interlocutory Review Yes "Response reviewed"
    And I submit "Response reviewed"
    Then the case should end "Response received" state

    When I choose "Action direction"
    And I set DWP State to No action "Action direction"
    And I submit "Action direction"
    Then the case should end "Response received" state
