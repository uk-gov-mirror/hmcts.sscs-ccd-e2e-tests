Feature: The Update subscriptions

@update-subscriptions @nightly-test11
  Scenario: Update Subscription
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    And I choose "Update subscription"
    And I subscribed to all parties to "Yes"

   And I choose "Update subscription"
   And I subscribed to all parties to "No"







