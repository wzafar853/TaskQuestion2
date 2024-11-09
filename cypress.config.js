const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default

const GmailReader = require('./node_modules/gmail-tester'); // Adjust path as necessary

const fs = require('fs-extra');
const path = require('path');
const gmail = require('gmail-tester');

 
 function getConfigurationByFile(file) {
     const pathToConfigFile = path.resolve('.', 'config', `${file}.json`);
 
     return fs.readJson(pathToConfigFile);
 }

module.exports = defineConfig({

  chromeWebSecurity: false,
  env: {
    MAILOSAUR_API_KEY: "WfLdfbUj1QHx0OUA3JDN6PYADeS7kI4v",
  },
  
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
  
    experimentalModifyObstructiveThirdPartyCode: true,
    
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      on('task', {
        gmailReader: async args =>
            gmail.check_inbox(
                // credentials.json should present inside relevant directory.
                path.resolve(__dirname, "config/secret-files/credentials.json"),
                // gmail_token.json should present inside relevant directory.
                path.resolve(__dirname, "config/secret-files/gmail_token.json"),
                args.options,
            ),
          })

      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 10000  // Time in milliseconds

});
