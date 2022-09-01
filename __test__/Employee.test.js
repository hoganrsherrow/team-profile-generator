const Employee = require('../lib/Employee.js');

const { name, company } = Employee;

// Run first test
test('checks name of Employee to be John', () => {
    console.log(name);
    expect(name.match('John'));
});