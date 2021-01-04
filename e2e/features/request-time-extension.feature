@request-time-extension @nightly-test11
Feature: The Request time extension functionality

  Scenario: Request time extension
    Given I am signed in as a Case Officer
    And I have a PIP bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Request time extension"
    And I upload a doc
    Then I see field "Event" with value "Request time extension" in "History" tab



