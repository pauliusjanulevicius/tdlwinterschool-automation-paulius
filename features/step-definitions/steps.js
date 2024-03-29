import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";

Given("I am on Login page", async function() {
    await browser.navigateTo("https://the-internet.herokuapp.com/login")
});

When('I enter "tomsmith" username', async function() {
    const usernameInput = await $("#username");
    usernameInput.setValue("tomsmith");
});

When('I enter "dasdsadsad" username', async function() {
    const usernameInput = await $("#username");
    usernameInput.setValue("dasdsadsad");
});

When('I enter "SuperSecretPassword!" password', async function() {
    const passwordInput = await $("#password");
    passwordInput.setValue("SuperSecretPassword!");
  });

  When('I enter "asdasdsadasd" password', async function() {
    const passwordInput = await $("#password");
    passwordInput.setValue("asdasdsadasd");
  });

When('I press on Login button', async function() {
    const button = await $("button[type=submit]")
    button.click();
  });
Then('I see a message "You logged into a secure area!"', async function() {
    const flashMessage = await $("#flash");
    console.log(await flashMessage.getText());
    await expect(flashMessage)
        .toHaveText(expect.stringContaining("You logged into a secure area!"));
  });

  Then('I see a message "Your username is invalid!"', async function() {
    const flashMessage = await $("#flash");
    console.log(await flashMessage.getText());
    await expect(flashMessage)
        .toHaveText(expect.stringContaining("Your username is invalid!"));
  });

Then('I see the Logout button', async function() {
    const logoutButton = await $("i*=Logout");
    await expect (logoutButton).toBeDisplayed();
  });

  Then("I don't see the Logout button", async function() {
    const logoutButton = await $("i*=Logout");
    await expect (logoutButton).not.toBeDisplayed();
  });