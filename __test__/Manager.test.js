const Manager = require('../lib/Manager.js');

test('Creates new Manager object.', () => {
    const manager = new Manager('Dan', 123, 'dan@gmail.com', 5);

    expect(manager.name).toBe('Dan');
    expect(manager.id).toBe(123);
    expect(manager.email).toBe('dan@gmail.com');
    expect(manager.getName()).toBe('Dan');
    expect(manager.getId()).toBe(123);
    expect(manager.getEmail()).toBe('dan@gmail.com');
    expect(manager.getOfficeNumber()).toBe(5);
    expect(manager.getRole()).toBe('Manager');
});