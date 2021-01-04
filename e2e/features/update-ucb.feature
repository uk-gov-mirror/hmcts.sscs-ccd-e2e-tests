Feature: The Update UCB

@update-ucb @nightly-test
  Scenario: Update UCB flag with upload response Granted and Refused
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    And I choose "Upload response"
    And I upload a UCB doc contains further information "YES" for "PIP"
    Then the case should end in "Response received" state
    Then I should see UCB flag

    And I choose "Update UCB flag"
    And I set UCB flag to "No"



