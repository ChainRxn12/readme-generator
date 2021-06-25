//require inquirer for prompt questions
const inquirer = require('inquirer');
//require fs to write the readme.md file
const fs = require('fs');


// create inquirer prompt for readme generator

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe what you project is about?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the uses of your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are your contribution guidelines?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the testing instructions?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name (case sensitive)?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
    ])
    .then((answers) => {
        const readmePageConent = generateReadme(answers);

        fs.writeFile('readme.md' , readmePageConent, (err) =>
        err ? console.log(err) : console.log('You Successfull Generated a Readme.Md File!')
        );
    });

    //create generateReadme outline, plug-in necessary prompt answers

const generateReadme = (answers) =>
  `# ${answers.title}

  ## Table of Contents

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Description
  * ${answers.description}

  ## Installation
  * ${answers.installation}

  ## Usage 
  * ${answers.usage}

  ## License
  * ${answers.license}

  ## Contributing
  * ${answers.contributing}

  ## Tests
  * ${answers.testing}

  ## Questions
  * Please feel free to reach out to me in the following links with any questions!!
  * [Github link for ${answers.github}](https://github.com/${answers.github} "Github Link for ${answers.github}")
  * [Email ${answers.name}](mailto:${answers.email})`;
