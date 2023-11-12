const { Given, When, Then, After } = require('@cucumber/cucumber');
const { 
  LOGIN_INPUT_PASSWORD,
  LOGIN_INPUT_EMAIL,
  LOGIN_SIGNIN_BUTTON, 
  ADMIN_DASHBOARD_TITLE,
  USER_PROFILE_DROPDOWN,
  LOGOUT_LINK,
  DASHBOARD_URL
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

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

// Assuming you already have 'this.driver' configured with your WebDriver instance

When('I select the "See Most Posts" section', async function () {
  let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]');
  return await element.click();
});

When('I select the "Create New Post" options', async function () {
  let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/a');
  return await element.click();
});

When('I type the post title {string}', async function (title) {
  let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/div[2]/textarea');
  return await element.setValue(title);
});

When('I click on the "Publish" option', async function () {
  let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/section/header/section/button[2]');
  return await element.click();
});

When('I click on "Finish Review"', async function () {
  let element = await this.driver.$('//*[@id="ember101"]/div/div/div[3]/button');
  return await element.click();
});

When('I click on the "Publish Post Now" button', async function () {
  let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/button[1]');
  return await element.click();
});

Then('I confirm that post was created', async function () {
  let element = await this.driver.$('/html/body/div[4]/div/div/div/div');
  let actualText = await element.getText();
  expect(actualText.trim()).to.equal('Boom. It’s out there. That’s 3 posts published, keep going!');
});


// Create page

// Create Tags
