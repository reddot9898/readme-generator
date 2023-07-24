// 








// This is different from the criteria and had to get help on it 
// I kept running into an error and using this setup as well as an additional js file solved my error of 'ERR_REQUIRE_ESM
import fs from 'fs';
import inquirer from 'inquirer';


function generateREADME(answers) {
  return `# ${answers.title}

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

// Function to prompt user for input
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
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
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);

  return answers;
}


async function init() {
  try {
    const answers = await promptUser();
    const readmeContent = generateREADME(answers);

    // Write the generated README content to a file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('Your New README.md File Has Been Successfully Generated');
    });
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

init();
