const Engineer = require("../lib/engineer");

const engineer = new Engineer();

test('Validate engineer name', () => {
    engineer.name = 'Jane';
expect(engineer.getName(engineer.name)).toBe('Jane');
});

test('Validate engineer id', () => {
    engineer.id = '1234';
expect(engineer.getId(engineer.id)).toBe('1234');
});

test('Validate engineer email', () => {
    engineer.email = 'jane@domain.com';
expect(engineer.getEmail(engineer.email)).toBe('jane@domain.com');
});

test('Validate employee role', () => {
    engineer.email = 'Engineer';
expect(engineer.getRole(engineer.email)).toBe('Engineer');
});

test('Validate employee github username', () => {
    engineer.gitHub = 'jane';
expect(engineer.getGithub(engineer.gitHub)).toBe('jane');
});