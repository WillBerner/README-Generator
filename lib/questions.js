const questions = [
    {
        name: "projectTitle",
        type: "input",
        message: "What is your project's title?"
    },
    {
        name: "description",
        type: "input",
        message: "What is this project about?"
    },
    {
        name: "installationInstructions",
        type: "input",
        message: "How does one install this project?"
    },
    {
        name: "usageInstructions",
        type: "input",
        message: "How does one use this project?"
    },
    {
        name: "contributionGuidelines",
        type: "input",
        message: "How should others contribute to this project if they want?"
    },
    {
        name: "testInstructions",
        type: "input",
        message: "How does one test this project?"
    },
    {
        name: "licenseType",
        // something else
        type: "input",
        message: "What license would you like for this project?"
    },
    {
        name: "github",
        type: "input",
        message: "What is your GitHub username?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?"
    },
];

module.exports = questions;