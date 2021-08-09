// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer");
const questions = require("./lib/questions.js");
const fs = require("fs");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        (error) ? log.error(error) : console.log("Success");
    })
}

// TODO: Create a function to initialize app
async function init() {

    let markdown = '';

    await inquirer.prompt(questions)
    .then(data => {
        markdown = generateMarkdown(data);
    })
    .catch(error => console.log(error));

    writeToFile("./dist/README.md", markdown);
    
}

// Function call to initialize app
init();
