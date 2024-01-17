const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ccimsinternal.infodev.com.np/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
