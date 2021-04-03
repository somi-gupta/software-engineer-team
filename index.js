const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

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
       generateHtml(answers);
    fs.writeFile('team.html', generateHtml(answers), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
})
    .catch(error =>{
        console.log ('Not a valid username', error);
    });
}

initialQuestion();

async function githubdetails(data){
    const githubApi = `https://api.github.com/users/${data}`;
    const response = await axios.get(githubApi)
    return response.data;
}


function generateFile(data){
    let name = data.name;
    let id = data.id;
    let email = data.email;
    let role = data.role ;
    let officeNumber = data.officeNumber;
    let school = data.school;
    let githubUrl;
    let teamMember;
    let teamEmpData = [];
   if (role === 'Manager'){
        teamMember  = new Manager(name, id, email,officeNumber );
        role = teamMember.getRole();
         teamEmpData.push = `
        <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${data.employeeName}
                        </br>
                        <p class="card-title">${name}<i class="fas fa-coffee"></i> ${role}</p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${teamMember.id}</li>
                        <li class="list-group-item">Email: ${teamMember.email}</li>
                        <li class="list-group-item">Office Number: ${teamMember.officeNumber}</li>
                      </ul>
                    </div>
                  </div>
                </div>`
    } else if(role === 'Engineer'){
         githubdetails(data.githubUsername)
         .then(response =>{
             githubUrl = response.html_url;
            return githubUrl;
         })
        teamMember = new Engineer(name, id, email, githubUrl)
        role = teamMember.getRole();
         teamEmpData.push = `
        <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${data.employeeName}
                        </br>
                        <p class="card-title">${name}<i class="fas fa-glasses"></i> ${role}</p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${teamMember.id}</li>
                        <li class="list-group-item">Email: ${teamMember.email}</li>
                        <li class="list-group-item">Github: ${teamMember.githubUrl}</li>
                      </ul>
                    </div>
                  </div>
                </div>`
    }
    else if(role === 'Intern'){
        teamMember = new Intern(name, id, email, school)
        role = teamMember.getRole();
         teamEmpData.push = `
        <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${data.employeeName}
                        </br>
                        <p class="card-title">${name}<i class="fas fa-graduation-cap"></i> ${role}</p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${teamMember.id}</li>
                        <li class="list-group-item">Email: ${teamMember.email}</li>
                        <li class="list-group-item">School: ${teamMember.school}</li>
                      </ul>
                    </div>
                  </div>
                </div>`             
    }
    // let htmlCardData = teamEmpData.join("");
    console.log(`Data is ${teamEmpData}`);
        fs.appendFile('team.html',teamEmpData.join(""), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}


function generateHtml(data){
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
${ generateFile(data)}
</div>
</div>
</div>
</body>
</html>
    `
    return html;
}
