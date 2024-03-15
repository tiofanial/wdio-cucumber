@regression @tdd
Feature: Saucedemo login Tests with TDD (Test Data Driven)
 
    @all @positive @smoke
    Scenario: Login successfully with valid credentials
        Given I open Saucedemo website
        When I login with valid credentials
        Then I should be on the inventory page

    @all @negative
    Scenario Outline: Login with invalid credentials
        Given I open Saucedemo website
        When I login with <username> and <password>
        Then I should see an error message

        Examples:
            | username      | password          |
            | invalid_user  | secret_sauce      |
            | standard_user | invalid_password  |