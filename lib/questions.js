const questions = [
    {
        name: "username",
        type: "input",
        message: "What is your name?"
    },
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
        type: "list",
        message: "What license would you like for this project?",
        choices: ["MIT License", "BSD 2-Clause License", "Boost Software License 1.0"]
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
    {
        name: "liveLink",
        type: "input",
        message: "What is a live link to this project, if it has one?"
    },
];

module.exports = questions;