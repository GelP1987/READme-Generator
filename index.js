// Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');
const inquirer = require('inquirer');
// Creates an array of questions for user input
const questions = [
         {
            // user input for generating Project Title in the README
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
        // user input for generating Description of the project in the README
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
     // user input for generating install instructions project in the README
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
     // user input for generating usage information for the project in the README
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
    // user input for generating contribution information for the project in the README
    type: 'input',
    name: 'contributing',
    message: 'Contributing',
    validate: contributingInput => {
      if (contributingInput) {
        return true;
      } else {
        console.log('Please enter Contributors');
        return false;
      }
    }
   },

{
     // user input for generating testing information of the project in the README
    type: 'input',
    name: 'testing',
    message: 'Describe Testing',
    validate: testingInput => {
      if (testingInput) {
        return true;
      } else {
        console.log('Please enter your testing info!');
        return false;
      }
    }
   },

{
     // user input for generating license information of the project in the README
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
    // user input for generating email that can be used to contact the generator with questions in the README
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
    // user input for generating github user link for the generator of the project in the README
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

//Function to initialize app
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