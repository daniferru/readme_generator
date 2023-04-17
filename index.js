const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("../utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "Title"
    }, {
        type: "input",
        message: "What is the project about? Give a detailed description explaining the what, why, and how of your project.",
        name: "Description"
    }, {
        type: "input",
        message: "Table of Contents.",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    }, {
        type: "input",
        message: "How is the app used? Give instructions.",
        name: "Usage"
    }, {
        type: "checkbox",
        message: "Select a license aplicable to this project.",
        name: "License",
        choices: ["MIT", "APACHE2.0","Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
    }, {
        type: "input",
        message: "List any product dependencies here.",
        name: "Require"
    }, {
        type: "input",
        message: "State your GitHub username.",
        name: "Creator"
    }, {
        type: "input",
        message: "State your full name.",
        name: "Name"
    }, {
        type: "input",
        message: "Provide a valid email address.",
        name: "Email"
    }, {
        type: "input",
        message: "List any contributors.",
        name: "Contributors"
    }, {
        type: "input",
        message: "Provide walkthough of required tests if applicable.",
        name: "Tests"
    },
];

//Initializing application
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Creating Professional README,md File...");
        writeToFile("./dist/README.md", generateMarkdown ({ ...responses }));
    });
}
init();

// README,md File
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(cwd(). fileName), data);
}