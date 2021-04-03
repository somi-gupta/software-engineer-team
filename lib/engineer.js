const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email,gitHubUsername){
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
    }

    getGithubUsername(){
        return  this.gitHubUsername;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;