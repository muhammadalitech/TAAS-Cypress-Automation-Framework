const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: "4qkjxa",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure:true,
    video: false,
    videoUploadOnPasses : true
  },
  "experimentalStudio": true  // to enable cypress studios 
});


