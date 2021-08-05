// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer");
const questions = require("./lib/questions.js")

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data => console.log(data))
    .catch(error => console.log(error));

    // console.log(generateMarkdown({title:"test"}));
    
}

// Function call to initialize app
init();
