Feature: UC Final Decision Notices

  @uc-decision @nightly-test @UC-DN-1
  Scenario: Write UC final decision WCA and refuse all
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should end in "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "NO" To Allowed "NO"
    And I select schedule 6 activities with <15 points and schedule 8 para 4 "NO"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "NO"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision upheld
    Then the case should end in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test @UC-DN-2
  Scenario: Write ESA final decision WCA and Support group, >= points for schedule 2, No Schedule 3, No reg 35 and refuse
    Given I am signed in as a Case Officer
    And navigate to an existing case
    When I choose the next step "Admin - send to Ready to List"

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "YES" To Allowed "NO"
    And I opt out schedule 7 activities and schedule 9 para 4 "NO"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "NO"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision upheld
    Then the case should end in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-3
  Scenario: Write UC final decision LCWA and Support group, >= points for schedule 6, No Schedule 7, schedule 9 para 4 YES and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "NO" To Allowed "YES"
    And I select schedule 6 activities with >=15 points
    And I opt out schedule 7 activities and schedule 9 para 4 "YES"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should end "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-4
  Scenario: Write UC final decision LCWA and Support group, Select Schedule 7 and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "YES" To Allowed "YES"
    And I select schedule 7 activities
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-5
  Scenario: Write UC final decision LCWA and Not support group, >= points for schedule 6, No Schedule 7, schedule 9 para 4 NO and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "NO" To Allowed "YES"
    And I select schedule 6 activities with >=15 points
    And I opt out schedule 7 activities and schedule 9 para 4 "NO"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-6
  Scenario: Write UC final decision LCWA and Not support group, >= points for schedule 6, Select Schedule 7 and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "NO" To Allowed "YES"
    And I select schedule 6 activities with >=15 points
    And I select schedule 7 activities
    And I continue writing final decision WCA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-7
  Scenario: Write UC final decision LCWA and Not support group, <15 points for schedule 6, schedule 8 para 4 YES, No Schedule 7, schedule 9 para 4 NO,  and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "NO" To Allowed "YES"
    And I select schedule 6 activities with <15 points and schedule 8 para 4 "YES"
    And I opt out schedule 7 activities and schedule 9 para 4 "NO"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-8
  Scenario: Write UC final decision LCWA and Not support group, <15 points for schedule 6, schedule 8 para 4 YES, No Schedule 7, schedule 9 para 4 YES,  and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "NO" To Allowed "YES"
    And I select schedule 6 activities with <15 points and schedule 8 para 4 "YES"
    And I opt out schedule 7 activities and schedule 9 para 4 "YES"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-9
  Scenario: Write UC final decision LCWA and Not support group, <15 points for schedule 6, schedule 8 para 4 YES, Select Schedule 7 and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "NO" To Allowed "YES"
    And I select schedule 6 activities with <15 points and schedule 8 para 4 "YES"
    And I select schedule 7 activities
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"


  @uc-decision @nightly-test-10 @UC-DN-10
  Scenario: Write UC final decision non LCWA and refuse all
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "NO" and Support group "NO" To Allowed "NO"
    And I continue writing final decision non LCWA appeal
    And I provide reasons and check answers To Allowed "NO"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision upheld
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-11
  Scenario: Write UC final decision non LCWA and allow
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "NO" and Support group "NO" To Allowed "YES"
    And I continue writing final decision non LCWA appeal
    And I provide reasons and check answers for non WCA To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-12
  Scenario: Write UC final decision with manual upload
    Given I am signed in as a Case Officer
    And I have a UC bulk-scanned document with SSCSPE fields
    When I choose the next step "Create new case from exception"
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" appeal status

    When I switch to be a Judge
    When I choose "Write final decision"
    And I choose manual upload
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" appeal status

    And I see "Final Decision Notice"
