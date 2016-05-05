Feature: Login functionality
  In order to ensure login functionality works properly
  I want to this feature to pass


  Scenario: Login functionality with valid authentication details
    Given username "test" password "test"
    When user presses login button
    Then user should be landed to home page

  #Scenario: Login functionality with valid authentication details
