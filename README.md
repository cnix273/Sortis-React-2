# Sortis-React-2

## Description

This is a full stack web application that serves as a CRM Search Engine for Sortis.

Sortis is a real estate investment firm. This functions as an internal application for Sortis through which employees can view investor information or add interested parties to their mailing list. Employees can search for investors by name or email. Investor information is retrieved from CrowdStreet, Sortis' CRM, using an API call to HubSpot which connects with the CrowdStreet database. The investor profiles that pertain to the search parameters are returned and displayed on the CRM search page.

The mailing list is populated using an API call to MailChimp. The user is prompted to provide the name and email of the new contact which is then pushed to MailChimp uing an API post request.

Employees must create an account with a username, email, and password which are encrypted. They then must log in to access the CRM Search and new mailing contact functionality. In order to log in, the user must enter ther log in information which must be validated. Once logged in, their session persists until the browser is closed.

## Installation

1. Clone the repository from github to your local server: "git clone https://github.com/cnix273/Sortis-React-2.git".
2. Install node packages: "yarn install"
5. Run the application the terminal: "yarn dev"

## Usage

**Technologies Used**
* ReactJS - JavaScript library for building user interfaces and UI components
* JavaScript - Takes in input from the user and adds functionality to the application.
* JQuery - JavaScript library to simplify HTML DOM traversal.
* CSS - Adds styling to the application
* Node.js - JavaScript runtime environment that executes JavaScript code outside a web browser.
* Express - Node.js framework.
* Axios - 3rd party API call to get requested information
* MongoDB - Databse Management System.
* GitHub - Hosts the repository.
* Heroku - Hosts the application.

You must manually create the databse in MySQL based on the database information provided in the config.json file. Change the "Password" parameter of the development object to your MySQL password to connect to your database.

**Contributors:**
* Cameron Nix
* Ava Brennneke
* Nick Johnson
* Jaden Lee
* Jon Yee

## Contributing

Pull requests are welcome.

To contribute to this refactor, clone this repo locally and commit your code on a separate branch.

## License

Licensed by: MIT License.
