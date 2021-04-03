const Intern = require("../lib/intern");

const intern = new Intern();

test('Validate employee name', () => {
    intern.name = 'Somi';
expect(intern.getName(intern.name)).toBe('Somi');
});

test('Validate employee id', () => {
    intern.id = '1234';
expect(intern.getId(intern.id)).toBe('1234');
});

test('Validate employee email', () => {
    intern.email = 'jane@domain.com';
expect(intern.getEmail(intern.email)).toBe('jane@domain.com');
});

test('Validate employee role', () => {
    intern.email = 'Intern';
expect(intern.getRole(intern.email)).toBe('Intern');
});

test('Validate employee school', () => {
    intern.school = 'OSU';
expect(intern.getSchool(intern.school)).toBe('OSU');
});