Feature: Issue decision

  @adjournment @nightly-test
  Scenario: Should end up in "Ready to list" state when decision is issued with generate notice is no
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields

    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "PIP"
    Then the case should end "Ready to list" state

    When I switch to be a Case Officer
    When I choose "Add a hearing"
    And I book a hearing
    And I choose "Hearing booked"
    And I submit "Hearing booked"
     Then the case should end "Hearing" state

    When I switch to be a Judge
    When I choose "Write adjournment notice"
    And I generate an adjournment notice
    And I see "Draft Adjournment Notice"
    And I choose "Issue adjournment notice"
    And I continue
    And I submit "Issue adjournment notice"
    Then the case should end "Ready to list" state

    @adjournment @nightly-test-5
    Scenario: Should end up in "Ready to list" state when decision is issued with generate notice is yes and issue direction is no
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
      Then the case should be in Hearing appeal status

      When I switch to be a Judge
      When I choose "Write adjournment notice"
      And I upload an adjournment notice and issue direction "No"
      And I see "Draft Adjournment Notice"
      And I choose "Issue adjournment notice"
      And I continue
      And I submit "Issue adjournment notice"
      Then the case should be in "Ready to list" appeal status

      @adjournment @nightly-test-5
      Scenario: Should end up in "Not listable" state when decision is issued with generate notice is yes and issue direction is yes
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
        Then the case should be in Hearing appeal status

        When I switch to be a Judge
        When I choose "Write adjournment notice"
        And I upload an adjournment notice and issue direction "Yes"
        And I see "Draft Adjournment Notice"
        And I choose "Issue adjournment notice"
        And I continue
        And I submit "Issue adjournment notice"
        Then the case should be in "Not listable" appeal status
