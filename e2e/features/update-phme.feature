Feature: The Update UCB

@update-phme @nightly-test-1000
  Scenario: Update UCB flag with upload response Granted and Refused
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    And I choose "Upload response"
    And I upload a "PHME" doc contains further information "YES" for "PIP"
    Then the case should end in "Response received" state
    Then I should see PHME flag as "Under Review"

    When I switch to be a Judge
    And I choose "Review PHME request"
    And I set PHME Granted flag to "Yes"
    Then I should see PHME flag as "Granted"

    When I switch to be a Case Officer
    And I choose "Create a bundle"
    And I submit "Create a bundle"
    Then the bundles should be successfully listed in "History" tab
    And the case bundle details should be listed in "Bundles" tab
    And the "SSCS Bundle Edited" bundle configuration should have been used
    And the "SSCS Bundle Original" bundle configuration should have been used


