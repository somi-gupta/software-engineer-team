const Employee = require("./employee");

class Manager extends Employee{
    constructor(officeNumber){
        super();
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
