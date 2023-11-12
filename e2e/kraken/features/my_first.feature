Feature: User can make subscription

@user1 @web 
Scenario: User subscribes to the service
  Given I am on the subscription page
  When I click the Subscribe button
  And I enter "John" in the name input field