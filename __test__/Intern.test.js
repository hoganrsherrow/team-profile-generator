const Intern = require('../lib/Intern.js');

test('creates new intern object', () => {
    const intern = new Intern('Dan', 123, 'dan@gmail.com', 'Vanderbilt');

    expect(intern.name).toBe('Dan');
    expect(intern.id).toBe(123);
    expect(intern.email).toBe('dan@gmail.com');
    expect(intern.school).toBe('Vanderbilt');
    expect(intern.getName()).toBe('Dan');
    expect(intern.getId()).toBe(123);
    expect(intern.getEmail()).toBe('dan@gmail.com');
    expect(intern.getSchool()).toBe('Vanderbilt');
    expect(intern.getRole()).toBe('Intern');
});