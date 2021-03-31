Feature: UC Final Decision Notices

  Background:
    Given I presetup an "UC" SYA case
    And I am signed in as a Case Officer
    When I navigate to an existing case

  @uc-decision @nightly-test @UC-DN-1 @migrated-to-exui
  Scenario: Write UC final decision WCA and refuse all
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "wca" appeal "YES" and Support group "NO" To Allowed "NO"
    And I select schedule 6 activities with <15 points and schedule 8 para 4 "NO"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "NO"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision upheld
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test @UC-DN-2 @migrated-to-exui
  Scenario: Write ESA final decision WCA and Support group, >= points for schedule 2, No Schedule 3, No reg 35 and refuse
    When I choose the next step "Admin - send to Ready to List"
    Then the case should be in "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "wca" appeal "YES" and Support group "YES" To Allowed "NO"
    And I opt out schedule 7 activities and schedule 9 para 4 "NO"
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "NO"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision upheld
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-3 @migrated-to-exui
  Scenario: Write UC final decision LCWA and Support group, >= points for schedule 6, No Schedule 7, schedule 9 para 4 YES and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

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
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-4 @migrated-to-exui
  Scenario: Write UC final decision LCWA and Support group, Select Schedule 7 and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "YES" and Support group "YES" To Allowed "YES"
    And I select schedule 7 activities
    And I continue writing final decision LCWA appeal
    And I provide reasons and check answers To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-5 @migrated-to-exui
  Scenario: Write UC final decision LCWA and Not support group, >= points for schedule 6, No Schedule 7, schedule 9 para 4 NO and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

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
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-6 @migrated-to-exui
  Scenario: Write UC final decision LCWA and Not support group, >= points for schedule 6, Select Schedule 7 and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

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
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-7 @migrated-to-exui
  Scenario: Write UC final decision LCWA and Not support group, <15 points for schedule 6, schedule 8 para 4 YES, No Schedule 7, schedule 9 para 4 NO,  and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

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
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-8 @migrated-to-exui
  Scenario: Write UC final decision LCWA and Not support group, <15 points for schedule 6, schedule 8 para 4 YES, No Schedule 7, schedule 9 para 4 YES,  and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

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
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-9 @migrated-to-exui
  Scenario: Write UC final decision LCWA and Not support group, <15 points for schedule 6, schedule 8 para 4 YES, Select Schedule 7 and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

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
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"


  @uc-decision @nightly-test-10 @UC-DN-10 @migrated-to-exui
  Scenario: Write UC final decision non LCWA and refuse all
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "NO" and Support group "NO" To Allowed "NO"
    And I continue writing final decision non LCWA appeal
    And I provide reasons and check answers To Allowed "NO"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision upheld
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-11 @migrated-to-exui
  Scenario: Write UC final decision non LCWA and allow
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I write a final decision of "lcwa" appeal "NO" and Support group "NO" To Allowed "YES"
    And I continue writing final decision non LCWA appeal
    And I provide reasons and check answers for non WCA To Allowed "YES"
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"

  @uc-decision @nightly-test-10 @UC-DN-12 @migrated-to-exui
  Scenario: Write UC final decision with manual upload
    Then the case should be in "With DWP" state

    When I switch to be a DWPResponse Writer
    When I choose "Upload response"
    And I upload contains further information "NO" for "UC"
    Then the case should be in "Ready to list" state

    When I switch to be a Judge
    When I choose "Write final decision"
    And I choose manual upload
    And I see "Draft Decision Notice"

    When I choose "Issue final decision"
    And I issue a final decision generate decision no
    Then the case should be in "Dormant" state

    And I see "Final Decision Notice"
