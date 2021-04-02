const Employee = require("./employee");

class Engineer extends Employee{
    constructor(gitHub){
        super();
        this.gitHub = gitHub;
    }

    getGithub(){
        this.gitHub;
    }
    getRole(){
        return "Engineer";
    }
}
