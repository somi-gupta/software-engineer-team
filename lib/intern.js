const Employee = require("./employee");

class Intern extends Employee{
    constructor(school){
        super();
        this.school = school;
    }

    getSchool(){
        this.school;
    }

    getRole(){
        return "Intern";
    }
}