const inquirer = require("inquirer");
const generateTeamCard = require('./develop/generateTeamCards');

function initialQuestion(){
    inquirer.prompt([
        {
            type: "list",
            message: "Please select the team member role you want to add.",
            choices: ["Engineer", "Intern", "Manager"],
            name: "role",
          },

          {
            type: "input",
            name: "employeeName",
            message: "Please enter employee name.",
          },
        
          {
            type: "input",
            name: "id",
            message: "Please enter employee ID.",
          },
          {
            type: "input",
            name: "email",
            message: "Please enter employee email.",
          },
          {
            type: "input",
            name: "officeNumber",
            message: "Please enter employee office number.",
            when: (answers) => answers.role === 'Manager',
          },
          {
            type: "input",
            name: "school",
            message: "Please enter employee school/univeristy name.",
            when: (answers) => answers.role === 'Intern',
          },
          {
            type: "input",
            name: "githubUsername",
            message: "Please enter employee github username.",
            when: (answers) => answers.role === 'Engineer',
          },
          {
            type: "confirm",
            name: "addEmployee",
            message: "Do you want to enter anoter employee?",
          },
    ])
    .then((answers) => {
        if(answers.addEmployee){
            initialQuestion();
        } else {
            console.log (`Thank you!`)
        }  
        generateTeamCard.teamMembers(answers);
    })
}

initialQuestion();