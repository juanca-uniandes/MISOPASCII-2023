Feature: Logout

@user1 @web 
Scenario: User can logout
  Given I navigate to page "<LOGIN_URL>"
  And I wait for 5 seconds
  When I enter a correct email "<EMAIL>"
  And I wait for 2 seconds
  When I enter a correct password "<PASSWORD>"
  And I wait for 2 seconds
  When I click on the signin button
  And I wait for 5 seconds
  Then I can see dashboard admin
  And I wait for 2 seconds
  When I click on the profile dropdown
  And I click on logout
  Then I can not get access to the dashboard
