# Sortis-React-2

## Description

This is a refactor of a full-stack CRM search application using React.

This functions as an internal application for Sortis, a real estate investment firm, through which employees can view investor information or add interested parties to their mailing list.

Employees can search for investors by name and email. Investor information is retrieved from CrowdStreet, Sortis' CRM, using an API call to HubSpot which connects with the CrowdStreet database. The investor profiles that pertain to the search parameters are returned and displayed on the CRM search page.

The mailing list is populated using an API call to MailChimp. The user is prompted to provide the name and email of the new contact which is then pushed to MailChimp uing an API post request.

Employees must create an account with a username, email, and password which are encrypted. They then must log in to access the CRM search and new mailing contact functionality. In order to log in, the user must enter ther log in information which must be validated. Once logged in, their session persists until the browser is closed.

## Installation

1. Clone the repository from github to your local server: "git clone https://github.com/cnix273/Sortis-React-2.git".
2. Install node packages: "yarn install"
5. Run the application in the terminal: "yarn dev"

## Usage

**Technologies Used**
* ReactJS - JavaScript library for building user interfaces and UI components
* JavaScript - Makes the application dynamic so that input can be received from the user.
* Node.js - JavaScript runtime environment that executes JavaScript code outside a web browser.
* Express - Node.js framework.
* JSX - HTML-like syntax used by React.
* Material-UI - React UI framework.
* CSS - Adds styling to the application.
* MongoDB - Databse Management System.
* Mongoose - MongoDB object modeling for Node.js.
* MongoDB Atlas - Cloud database service for deploying MongoDB databases.
* GitHub - Hosts the repository.
* Heroku - Hosts the deployed application.

**Live Application:** https://sortis-react-crm.herokuapp.com/

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
