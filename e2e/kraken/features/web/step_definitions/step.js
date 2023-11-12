const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, Capabilities } = require('selenium-webdriver');

const capabilities = Capabilities.chrome();
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the subscription page', async function () {
  await driver.get(LOGIN_PAGE);
  await sleep(1000);
});

When('I enter a correct email {email}', async function (email) {
    let element = await this.driver.$(LOGIN_INPUT_EMIAL);
    return await element.setValue(email);
});

When('I enter a correct password {email}', async function (email) {
  let element = await this.driver.$(LOGIN_INPUT_PASSWORD);
  return await element.setValue(email);
});

When('I click on the signin button', async function () {
  let element = await this.driver.$(LOGIN_INPUT_EMIAL);
  return await element.click(email);
});

After(async function () {
  await driver.quit();
});
