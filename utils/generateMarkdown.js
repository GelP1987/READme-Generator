// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
function renderLicenseBadge(license) {
  if (licesnse === 'None') {
    return '';
  }

  return `![License Badge](https://imgshields.io/badge/License-${license}-blueviolet)`;
}
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licesnse === 'None') {
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
  `;
// data = questionData or inputData?
}

module.exports = generateMarkdown;
