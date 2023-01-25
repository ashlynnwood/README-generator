// TODO: Include packages needed for this application
// fs
// path (maybe- if looking to put file in specific directory)
// inquirer
// generateMarkdown function from utils folder (module being exported, bring in over here)


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'example',
    message: 'Is this an example question?'
  },
  {

  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // use fs to write a new file with the data returned from 
  // generateMarkdown function
  // to see how this works.... look at init func
}

// TODO: Create a function to initialize app
function init() {
  // start your inquirer prompt, passing in questions array
  // .then with the inquirer responses
  // call writeToFile func passing in values it needs
  writeToFile('README.MD', generateMarkdown(responsesFromInquirer));
}

// Function call to initialize app
init();
