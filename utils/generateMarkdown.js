// function that creates a license badge or allows user to choose not to include one
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  return `![License Badge](https://img.shields.io/badge/License-${license}-blueviolet)`;
}
// function that creates a link for generated license or leaves it blank
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  return '- [License](#license)';
}
// function that constructs the license section based on user input or leaves it blank
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

    return `## License
    
This project is licensed under the ${license} license. 

  `
}
// function that generates dynamically generated markdown based on user input that is displayed in the README we're creating
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

  ${renderLicenseLink(data.license)}
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Questions
  Contact me at ${data.questions1} with any questions

  Check out my GitHub at https://github.com/${data.questions2}

  ## Testing
  ${data.testing}

  `;

}

module.exports = generateMarkdown;
