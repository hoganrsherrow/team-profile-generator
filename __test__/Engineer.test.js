const Engineer = require('../lib/Engineer.js');

test('creates new engineer object', () => {
    const engineer = new Engineer('Dan', 123, 'dan@gmail.com', 'danrpier');

    expect(engineer.name).toBe('Dan');
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe('dan@gmail.com');
    expect(engineer.github).toBe('danrpier');
    expect(engineer.getName()).toBe('Dan');
    expect(engineer.getId()).toBe(123);
    expect(engineer.getEmail()).toBe('dan@gmail.com');
    expect(engineer.getGithub()).toBe('danrpier');
    expect(engineer.getRole()).toBe('Engineer');
});