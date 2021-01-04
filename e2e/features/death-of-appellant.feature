Feature: Record the death of an appellant

@death-of-appellant @nightly-test11
  Scenario: Record the death of an appellant : No Appointee
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    And I choose "Death of appellant"
    And I enter date of appellant death with "No" to appointee
    Then I see field "Event" with value "Death of appellant" in "History" tab
    Then I see field "Want SMS Notifications" with value "No" in "Subscriptions" tab
    Then I see field "Subscribed to Email" with value "No" in "Subscriptions" tab

  @death-of-appellant @nightly-test11
  Scenario: Record the death of an appellant : Appointee
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    And I choose "Death of appellant"
    And I enter date of appellant death with "Yes" to appointee
    Then I see field "Event" with value "Death of appellant" in "History" tab
    Then I see field "Want SMS Notifications" with value "No" in "Subscriptions" tab
    Then I see field "Subscribed to Email" with value "No" in "Subscriptions" tab


