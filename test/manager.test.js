const Manager = require("../lib/manager");

const manager = new Manager();

test('Validate manager name', () => {
    manager.name = 'Jane';
expect(manager.getName(manager.name)).toBe('Jane');
});

test('Validate manager id', () => {
    manager.id = '1234';
expect(manager.getId(manager.id)).toBe("1234");
});

test('Validate manager email', () => {
    manager.email = 'jane@domain.com';
expect(manager.getEmail(manager.email)).toBe('jane@domain.com');
});

test('Validate manager role', () => {
    manager.email = 'Manager';
expect(manager.getRole(manager.email)).toBe('Manager');
});

test('Validate manager office number', () => {
    manager.officeNumber = '123-345-3423';
expect(manager.getOfficeNumber(manager.officeNumber)).toBe('123-345-3423');
});