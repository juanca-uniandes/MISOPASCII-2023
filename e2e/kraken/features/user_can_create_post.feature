Feature: User Can Create Post

@user1 @web 
Scenario: User can login and create a post
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
  When I select the "See Most Posts" section
  And I wait for 2 seconds
  When I select the "Create New Post" options
  And I wait for 2 seconds
  When I type the post title "New Post Title"
  And I wait for 2 seconds
  When I click on the "Publish" option
  And I wait for 2 seconds
  When I click on "Finish Review"
  And I wait for 2 seconds
  When I click on the "Publish Post Now" button
  And I wait for 5 seconds
  Then I confirm that post was created
  And I wait for 2 seconds



