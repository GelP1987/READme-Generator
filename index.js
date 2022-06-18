// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
         {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please Enter project name!');
                    return false;
                }
             }
     },

     {
     type: 'input',
     name: 'description',
     message: 'Describe your project',
     validate: descriptionInput => {
       if (descriptionInput) {
         return true;
       } else {
         console.log('Please enter your project description!');
         return false;
       }
     }
   },

   {
   type: 'input',
   name: 'install',
   message: 'Please explain your installation process',
   validate: installInput => {
     if (installInput) {
       return true;
     } else {
       console.log('Please explain your install process!');
       return false;
     }
   }
 },

 {
 type: 'input',
 name: 'usage',
 message: 'Describe Usage',
 validate: usageInput => {
   if (usageInput) {
     return true;
   } else {
     console.log('Please enter your usage info!');
     return false;
   }
 }
},

{
    type: 'input',
    name: 'Contribution',
    message: 'Contribution',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please enter Contributions');
        return false;
      }
    }
   },

{
    type: 'input',
    name: 'Tests',
    message: 'Describe Tests',
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please enter your tests info!');
        return false;
      }
    }
   },

   {
    type: 'input',
    name: 'usage',
    message: 'Describe Usage',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter your usage info!');
        return false;
      }
    }
   },   

{
type: 'list',
name: 'license',
message: 'Please share license(s)!',
choices: [
    "MIT",
    "APACHE",
    "GPL",
    "BSD",
    "None"
],
validate: licenseInput => {
  if (licenseInput) {
    return true;
  } else {
    console.log('Please share license(s)!');
    return false;
  }
}
},

{
    type: 'input',
    name: 'questions1',
    message: 'Please email for questions!',
    validate: questions1Input => {
      if (questions1Input) {
        return true;
      } else {
        console.log('Please share email!');
        return false;
      }
    }
    },

 {
    type: 'input',
    name: 'questions2',
    message: 'Share github for questions!',
    validate: questions2Input => {
      if (questions2Input) {
        return true;
      } else {
        console.log('Please share github!');
        return false;
      }
    }
    },

 ];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error)
        console.log(error);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const readmeContent = generateMarkdown(answers);

        writeToFile('./dist/README.md', readmeContent);
    })
.catch(error => {
    console.log(error);
});
}

// Function call to initialize app
init();