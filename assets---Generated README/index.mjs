// need the packages for the app, npm init, and npm install inquirer
// need an array of questions for user input
// need a function for the readme file
// need a function to call on to start the application
// use the readme guide to set up the readme layout
// need the table of contents to be linked to there respective sections for larger readme's so users can navigate easily








// This is different from the criteria and had to get help on it 
// I kept running into an error and using this setup as well as an additional js file solved my error of 'ERR_REQUIRE_ESM
import fs from 'fs';
import inquirer from 'inquirer';

// this function will generate your pre-made template readme and add in whatever the user inputs 
function generateREADME(answers) {
  return `

  # Title
  ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License Badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)
${answers.license} License

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}
`;
}

// function running the application, what you'll actually be asked in the terminal
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What Is The Title Of Your Project ?:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter Your description For Your Project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter Installation Instructions For Your Project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What License Will Your Project Be Using ?:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'Unlicense', 'Other'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What Is Your GitHub Username ?:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What Is Your Email Address ?:',
    },
  ]);

  return answers;
}

// this section of code i cannot take credit for, i was receiving a lot of errors running it and eventually had to ask what in the world i was doing wrong
// this was the solution
async function init() {
  try {
    const answers = await promptUser();
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('Your New README.md File Has Been Successfully Generated');
    });
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

init();
