const reporter = require("cucumber-html-reporter");
const { join } = require("path");

const options = {
    theme: "bootstrap",
    jsonDir: "cypress/cucumber-json",
    output: join("reports", "cucumber_report.html"),
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    columnLayout: 1,
    brandTitle: "W3org site testing"
};

reporter.generate(options);