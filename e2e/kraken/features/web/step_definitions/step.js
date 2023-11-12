const { Given, When, Then, After } = require('@cucumber/cucumber');
const { 
  LOGIN_INPUT_PASSWORD,
  LOGIN_INPUT_EMAIL,
  LOGIN_SIGNIN_BUTTON, 
  ADMIN_DASHBOARD_TITLE,
  USER_PROFILE_DROPDOWN,
  LOGOUT_LINK,
  DASHBOARD_URL,
  BUTTON_SEE_MOST_POST,
  BUTTON_CREATE_NEW_POST,
  INPUT_POST_TITLE,
  INPUT_BODY_TEXT,
  BUTTON_PUSBLISH_POST,
  BUTTON_FINISH_POST_REVIEW,
  BUTTON_PUBLISH_POST_NOW,
  TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED,
  DIV_TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED,
  PAGES_SECTION,
  CREATE_NEW_PAGE_OPTION,
  PAGE_TITLE_TEXTAREA,
  BODY_TEXT,
  PUBLISH_OPTION,
  FINISH_REVIEW_BUTTON,
  PUBLISH_PAGE_NOW_BUTTON,
  CONFIRMATION_ELEMENT
  } = require('./constants');
const { expect } = require('chai');


When('I enter a correct email {kraken-string}', async function (email) {
    let element = await this.driver.$(LOGIN_INPUT_EMAIL);
    return await element.setValue(email);
});

When('I enter a correct password {kraken-string}', async function (password) {
  let element = await this.driver.$(LOGIN_INPUT_PASSWORD);
  return await element.setValue(password);
});

When('I click on the signin button', async function () {
  let element = await this.driver.$(LOGIN_SIGNIN_BUTTON);
  return await element.click(element);
});

Then('I can see dashboard admin', async function () {
  let dashboardHeaderElement = await this.driver.$('/html/body/div[2]/div/main/section/div/div/header/h2');
  let dashboardHeaderText = await dashboardHeaderElement.getText();
  expect(dashboardHeaderText.trim()).to.equal(ADMIN_DASHBOARD_TITLE);
});

// Logout

When('I click on the profile dropdown', async function () {
  let element = await this.driver.$(USER_PROFILE_DROPDOWN);
  return await element.click(element);
});

When('I click on logout', async function () {
  let element = await this.driver.$(LOGOUT_LINK);
  return await element.click(element);
});

Then('I can not get access to the dashboard', async function () {
  let currentUrl = await this.driver.getUrl();
  expect(currentUrl).to.not.include(DASHBOARD_URL);
});

// Create post

When('I select the "See Most Posts" section', async function () {
  let element = await this.driver.$(BUTTON_SEE_MOST_POST);
  return await element.click();
});

When('I select the "Create New Post" options', async function () {
  let element = await this.driver.$(BUTTON_CREATE_NEW_POST);
  return await element.click();
});

When('I type the post title {string}', async function (title) {
  let element = await this.driver.$(INPUT_POST_TITLE);
  return await element.setValue(title);
});


When('I click on the body text', async function () {
  let element = await this.driver.$(INPUT_BODY_TEXT);
  return await element.click();
});

When('I click on the "Publish" option', async function () {
  let element = await this.driver.$(BUTTON_PUSBLISH_POST);
  return await element.click();
});

When('I click on "Finish Review"', async function () {
  let element = await this.driver.$(BUTTON_FINISH_POST_REVIEW);
  return await element.click();
});

When('I click on the "Publish Post Now" button', async function () {
  let element = await this.driver.$(BUTTON_PUBLISH_POST_NOW);
  return await element.click();
});

Then('I confirm that post was created', async function () {
  let element = await this.driver.$(DIV_TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED);
  let actualText = await element.getText();
  expect(actualText.trim()).to.include(TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED);
});

// Create page
When('I select the "Pages" section', async function () {
  let element = await this.driver.$(PAGES_SECTION);
  return await element.click();
});

When('I select the "Create New Page" option', async function () {
  let element = await this.driver.$(CREATE_NEW_PAGE_OPTION);
  return await element.click();
});

When('I type the page title {string}', async function (title) {
  let element = await this.driver.$(PAGE_TITLE_TEXTAREA);
  return await element.setValue(title);
});

When('I click on the body text of page', async function () {
  let element = await this.driver.$(BODY_TEXT);
  return await element.click();
});

When('I click on the "Publish Page" option', async function () {
  let element = await this.driver.$(PUBLISH_OPTION);
  return await element.click();
});

When('I click on "Finish Review Page"', async function () {
  let element = await this.driver.$(FINISH_REVIEW_BUTTON);
  return await element.click();
});

When('I click on the "Publish Page Now" button', async function () {
  let element = await this.driver.$(PUBLISH_PAGE_NOW_BUTTON);
  return await element.click();
});

Then('I confirm that the page was created', async function () {
  let element = await this.driver.$(CONFIRMATION_ELEMENT);
  let actualText = await element.getText();
  expect(actualText.trim()).to.include(TEXT_WHEN_POST_PAGE_TAG_ARE_CREATED);
});
// Create Tags
