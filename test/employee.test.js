const Employee = require("../lib/employee");

const employee = new Employee();

test('Validate employee name', () => {
    employee.name = 'Somi';
expect(employee.getName(employee.name)).toBe('Somi');
});

test('Validate employee id', () => {
    employee.id = '1234';
expect(employee.getId(employee.id)).toBe('1234');
});

test('Validate employee email', () => {
    employee.email = 'jane@domain.com';
expect(employee.getEmail(employee.email)).toBe('jane@domain.com');
});

test('Validate employee role', () => {
    employee.email = 'Employee';
expect(employee.getRole(employee.email)).toBe('Employee');
});