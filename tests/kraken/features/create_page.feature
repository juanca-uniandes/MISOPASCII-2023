Feature: Create Page

@user1 @web 
Scenario: User can create page successfully
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
  When I select the "Pages" section
  And I wait for 2 seconds
  When I select the "Create New Page" option
  And I wait for 2 seconds
  When I type the page title "Sample Page"
  And I wait for 2 seconds
  When I click on the body text of page
  And I wait for 2 seconds
  When I click on the "Publish Page" option
  And I wait for 2 seconds
  When I click on "Finish Review Page"
  And I wait for 2 seconds
  When I click on the "Publish Page Now" button
  And I wait for 5 seconds
  Then I confirm that the page was created
  And I wait for 2 seconds
