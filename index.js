// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
        return inquirer.prompt ([
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
     name: 'Description',
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
    name: 'Table Of Contents',
    message: 'Table Of Contents',
    validate: contentsInput => {
      if (contentsInput) {
        return true;
      } else {
        console.log('Please enter your Table of Contents');
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
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please enter your test info!');
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
name: 'license',
message: 'Please share license(s)!',
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
    name: 'questions',
    message: 'Please share questions!',
    validate: questionsInput => {
      if (questionsInput) {
        return true;
      } else {
        console.log('Please share questions!');
        return false;
      }
    }
    },

 ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()

}

// Function call to initialize app
init();