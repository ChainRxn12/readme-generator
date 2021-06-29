// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const generateMarkdown = require('./util/generateMarkdown.js');
const api = require('./util/api.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "1. What is your GitHub username? (No @ needed)",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "2. What is the name of your GitHub repo?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "3. What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "4. Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "5. Describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "6. Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "7. Provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "8. Provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "9. Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// How the cmd starts

// function to initialize program
async function init() {
    try{
        // Answer the Questions
        const userResponse = await inquirer.prompt(questions);
        console.log('Your Response: ', userResponse);
        console.log("Retrieving your GitHub data next");

        const userInfo = await api.getUser(userResponse);
        console.log("GitHub user info: ", userInfo);
        console.log("Generating Readme File");

        const markdown = generateMarkdown(userResponse, userInfo);
        console.log(markdown);

        await writeFileAsync('ExampleREADME.md', markdown);
        console.log("Readme File Created Successfully!)");

    } catch  (error) {
        console.error();
    }

}

// function call to initialize program
init();