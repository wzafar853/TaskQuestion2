Feature: Sign up and log in to Zoho Mail

Scenario: User signs up, verifies the email, and logs in
    Given I am on the Zoho Mail signup page
    When I sign up with valid details
    Then I should receive a verification email
    When I retrieve and enter the verification code
    Then I should be logged into my Zoho Mail account
