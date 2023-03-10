// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  } else {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue)`
}
}

// Create a function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (!license) {
    return "";
  } else{

  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  ${data.install}

  ## Usage
  ${data.use}

  ## License
  This project is licensed under the ${data.license}.

  ## Contributing
  ${data.contrib}

  ## Tests
  To run tests, run the following command: 
  ${data.test}

  ## Questions 
  If you have any questions about the repo, open an issue or 
  contact me directly at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
