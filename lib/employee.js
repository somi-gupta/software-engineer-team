class Employee {
    constructor(employeeName, id, email){
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }

getName() {
    this.employeeName;
 }

 getId(){
    this.id;
}

getEmail(){
    this.email;
}

getRole(){
    return "Employee";
}
}

module.exports = Employee;