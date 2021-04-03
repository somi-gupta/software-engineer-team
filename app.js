const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let teamDetails = [];
let cardTems = [];

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
        teamMembers(answers);
    })
}
function teamMembers(answers){  
    console.log("---------------")
    if (answers.role === 'Manager'){
        let manager  = new Manager(answers.employeeName, answers.id, answers.email,answers.officeNumber);
        const cardTem1 = `
        <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                            <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${manager.name}
                            </br>
                            <p class="card-title"><i class="fas fa-coffee"></i>${answers.role} </p>
                          </div>
                          <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id} </li>
                            <li class="list-group-item">Email: ${manager.email}</li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                          </ul>
                        </div>
                      </div>
                    </div>`
                    cardTems.push(cardTem1)
    }else if(answers.role === 'Engineer'){
        let githubUrl;
        githubdetails(answers.githubUsername)
         .then(response =>{
             githubUrl = response.html_url;
            return githubUrl;
         })
        let engineer  = new Engineer(answers.employeeName, answers.id, answers.email, githubUrl);
        const cardTem2 = `
        <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
              <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${engineer.name}
              </br>
              <p class="card-title">i class="fas fa-glasses"></i> ${answers.role}</p>
            </div>
            <ul class="list-group">
              <li class="list-group-item">ID:  ${engineer.id}</li>
              <li class="list-group-item">Email: ${engineer.email}</li>
              <li class="list-group-item">Github: ${engineer.githubUrl}</li>
            </ul>
          </div>
        </div>
      </div>`
      cardTems.push(cardTem2)
    } else {
        let intern  = new Intern(answers.employeeName, answers.id, answers.email,answers.school );
        const cardTem3 = `
    <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${intern.name}
                        </br>
                        <p class="card-title"><i class="fas fa-coffee"></i>${answers.role} </p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${intern.id}</li>
                        <li class="list-group-item">Email:  ${intern.email}</li>
                        <li class="list-group-item">Office Number: ${intern.school}</li>
                      </ul>
                    </div>
                  </div>
                </div>`

                cardTems.push(cardTem3)
    }
    cardTems.join();
    console.log (cardTems);
}

function generateHtml(){
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <title>Document</title>
</head>
<body>
<div class="card">
<div class="card-header text-center" style="background-color: gray;">My Team</div>
<div class="card-body">
<div class="row">
${cardTems}
</div>
</div>
</div>
</body>
</html>`
    fs.writeFile('team.html', html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}



generateHtml();
initialQuestion();

async function githubdetails(data){
    const githubApi = `https://api.github.com/users/${data}`;
    const response = await axios.get(githubApi)
    return response.data;
}