// Include packages needed for this application
const fs = require('fs');

// path (maybe- if looking to put file in specific directory)

const inquirer = require('inquirer');
// generateMarkdown function from utils folder (module being exported, bring in over here)
const generateMarkdown = require('./utils/generateMarkdown.js');


// Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',

    },
    {
      type: 'input',
      name: 'title',
      message: `What is your project's name?`,

    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project:',

    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']

    },
    {
      type: 'input',
      name: 'install',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
      default: 'npm test',
    },
    {
      type: 'input',
      name: 'use',
      message: 'What does the user need to know about using the repo?'
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'What does the user need to know about contributing to the repo?'
      
    },
// readme generated into utils folder
]

// TODO: Create a function to write README file
// function writeToFile(fileName, data, error)
  // use fs to write a new file with the data returned from 
  // generateMarkdown function
  // to see how this works.... look at init func


// Create a function to initialize app
function init() {
  // start inquirer prompt, passing in questions array
  inquirer
    .prompt(questions)

  // .then with inquirer data
    .then((data) => {

    // call writeToFile func passing in values it needs
      fs.writeFile('README.MD', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success! README.md generated')
      );
});
  
}

// Function call to initialize app
init();
