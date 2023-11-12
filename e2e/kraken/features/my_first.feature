Feature: User can make subscription

@user1 @web 
Scenario: User subscribes to the service
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I click the Subscribe button
  And I wait for 1 seconds
  And I enter <EMAIL> in the name input field