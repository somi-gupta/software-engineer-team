const generateFile = require('./generateHtml');
const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");
let cardTems = [];

function teamMembers(answers){  
    if (answers.role === 'Manager'){
        let manager  = new Manager(answers.employeeName, answers.id, answers.email,answers.officeNumber);
        const cardTem1 = `
        <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                            <div class="card-title text-center border" style="background-color: lightblue;">${manager.name}
                            </br>
                            <p class="card-title"><i class="fas fa-coffee"></i>${answers.role} </p>
                          </div>
                          <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id} </li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a> </li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                          </ul>
                        </div>
                      </div>
                    </div>`
                    cardTems.push(cardTem1)
    }else if(answers.role === 'Engineer'){
      let engineer  = new Engineer(answers.employeeName, answers.id, answers.email, answers.githubUsername);
            const cardTem2 = `<div class="col-sm-6">
        <div class="card">
          <div class="card-body">
              <div class="card-title text-center border" style="background-color: lightblue;">${engineer.name}
              </br>
              <p class="card-title"><i class="fas fa-glasses"></i> ${answers.role}</p>
            </div>
            <ul class="list-group">
              <li class="list-group-item">ID:  ${engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
              <li class="list-group-item">Github: <a href="https://api.github.com/${engineer.gitHubUsername}">${engineer.gitHubUsername}</a> </li>
            </ul>
          </div>
        </div>
      </div>`
      cardTems.push(cardTem2)        
    } else {
        let intern  = new Intern(answers.employeeName, answers.id, answers.email,answers.school );
        const cardTem3 = `<div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: lightblue;">${intern.name}
                        </br>
                        <p class="card-title"><i class="fas fa-coffee"></i>${answers.role} </p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">ID:  ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a> </li>
                        <li class="list-group-item">School: ${intern.school}</li>
                      </ul>
                    </div>
                  </div>
                </div>`

                cardTems.push(cardTem3)
    }
    // cardTems.join();
    generateFile.generateHtml(cardTems);
}
module.exports = { teamMembers };