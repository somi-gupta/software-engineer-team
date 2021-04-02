const inquirer = require("inquirer");
const axios = require("axios");

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
        
})
    .catch(error =>{
        console.log ('Not a valid username', error);
    });
}

initialQuestion();

function githubdetails(data){
    const githubApi = `https://api.github.com/users/${data.githubUsername}`;
    axios
    .get(githubApi)
    .then(function(githubData){
        const githubInfo = {
                  userName: githubData.data.name,
                  userEmail: githubData.data.email
                }
    })
}

function generateFile(data , githubData){
            name: "school",
            const{role, employeeName, id, email, officeNumber, school} = data;
    if (data.role === 'Manager'){
        return managerFile = `
        <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${employeeName}
                        </br>
                        <p class="card-title">  <i class="fas fa-coffee"></i> ${role}</p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                      </ul>
                    </div>
                  </div>
                </div>`
    } else if(data.role === 'Engineer'){
        return engFile = `
        <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${employeeName}
                        </br>
                        <p class="card-title">  <i class="fas fa-coffee"></i> ${role}</p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">Github: ${githubData.url}</li>
                      </ul>
                    </div>
                  </div>
                </div>`
    }else if(data.role === 'Intern'){
        return interFile = `
        <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">${employeeName}
                        </br>
                        <p class="card-title">  <i class="fas fa-coffee"></i> ${role}</p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${id}</li>
                        <li class="list-group-item">Email: ${email}</li>
                        <li class="list-group-item">School: ${school}</li>
                      </ul>
                    </div>
                  </div>
                </div>`
    }

}