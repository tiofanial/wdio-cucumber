const {Given, When, Then} = require("@wdio/cucumber-framework")
const Page = require("../pages/page")
const LoginPage = require('../pages/login')
const InventoryPage = require('../pages/inventory')

Given(/^I open Saucedemo website$/, async () => {
    await Page.open('/');
})

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('standard_user','secret_sauce')
})

Then(/^I should be on the inventory page$/, async () => {
    await InventoryPage.assertInventoryUrl();
})

When(/^I login with invalid username$/, async () => {
    await LoginPage.login('invalid_user','secret_sauce')
})

When(/^I login with invalid password$/, async () => {
    await LoginPage.login('standard_user','invalid_password')
})

Then(/^I should see an error message$/, async () => {
    await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service')
})

// TDD Scenario, harus nempel antara message terakhir dengan$
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username,password)
})
