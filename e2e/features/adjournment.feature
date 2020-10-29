Feature: Issue decision

  @adjournment @nightly-test
  Scenario: Should end up in "Dormant" state when decision is issued with generate notice is no
    Given I am signed in as a Case Officer
    And I have a bulk-scanned document with all fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Case Officer
    When I choose "Add a hearing"
    And I book a hearing
    And I choose "Hearing booked"
    And I submit "Hearing booked"
    Then the case should be in "Hearing" appeal status

    When I switch to be a Judge
    When I choose "Adjourn case"
    And I generate an adjournment notice
    And I see "Draft Adjournment Notice"
    And I choose "Issue adjournment notice"
    And I continue
    And I submit "Issue adjournment notice"
    Then the case should be in "Ready to list" appeal status
