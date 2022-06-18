// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  return `![License Badge](https://img.shields.io/badge/License-${license}-blueviolet)`;
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  return '-[License](#license)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

    return `## License
    
    This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Questions](#questions)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contibution}

  ## Questions
  ${data.questions1}
  ${data.questions2}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

${renderLicenseLink(data.license)}
  `;
}

module.exports = generateMarkdown;
