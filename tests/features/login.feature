Feature: Login functionality
  In order to ensure login functionality works properly
  I want to this feature to pass


  Scenario: Login functionality with invalid authentication details
    Given username "test" password "test"
    When user press login button
    Then user should not be able to login

  #Scenario: Login functionality with valid authentication details
