Feature: Create Tag

@user1 @web 
Scenario: User can create tag
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
  When I select the "Create Tags" section
  And I wait for 2 seconds
  When I select the "Create New Tag" option
  And I wait for 2 seconds
  When I type the tag name "TagName"
  And I wait for 2 seconds
  When I enter a description for the tag "Tag Description"
  And I wait for 2 seconds
  When I click on the "Save Tag" button
  And I wait for 5 seconds
  Then I confirm that the tag was created
