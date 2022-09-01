const Employee = require('../lib/Employee.js');

//const { name, company } = Employee;

// Run first test
test('creates new employee object', () => {
    const employee = new Employee('Dan', 123, 'dan@gmail.com');

    expect(employee.name).toBe('Dan');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('dan@gmail.com');
    expect(employee.getName()).toBe('Dan');
    expect(employee.getId()).toBe(123);
    expect(employee.getEmail()).toBe('dan@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});