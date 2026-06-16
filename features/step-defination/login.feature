Feature: login functionality for Amazon application

  Background:
    Given user navigate to "https://www.amazon.com"

  Scenario: user able to login successfully
    When user enter "username1" in "username" textbox
    And user enter "password1" in "password" textbox
    And user click on login button
    Then user validate dashboard

  Scenario Outline: verify errormsg for execution
    When user enter "<username>" in "username" textbox
    And user enter "<password>" in "password" textbox
    And user click on login button
    Then user validate error msg "<errormsg>"

    Examples:
      | username  | password  | errormsg                           |
      |           | password1 | Please provide username            |
      | username1 |           | Please provide Password            |
      | adfasd    | asdfasd   | Please provide Correct Credentials |

# Scenario: user verify error msg when user provide empty username
#     When user enter "" in "username" textbox
#     And  user enter "password1" in "password" textbox
#     And user click on login button
#     Then user validate error msg "Please provide username"
# Scenario: user verify error msg when user provide empty password
#     When user enter "username1" in "username" textbox
#     And  user enter "" in "password" textbox
#     And user click on login button
#     Then user validate error msg "Please provide Password"
# Scenario: user verify error msg when user provide wrong credentials
#     When user enter "dfadsf" in "username" textbox
#     And  user enter "asdfad" in "password" textbox
#     And user click on login button
#     Then user validate error msg "Please provide Correct Credentials"