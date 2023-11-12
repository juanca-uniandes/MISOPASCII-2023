Feature: User Can Make Login

@user1 @web 
Scenario: User can login with correct credentials
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