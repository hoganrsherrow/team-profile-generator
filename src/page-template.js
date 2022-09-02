const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

// Destructure object based on role property
function createObject(data) {
    if(data.role == 'Manager') {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        return manager;
    }
}

// Create card for employee
function createEmployeeCard(data) {
    let employee = createObject(data);
    return `
<section class="card">
    <h5 class="card-title">${employee.getName()}</h5>
    <h6 class="card-subtitle">${employee.getRole()}</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${employee.getId()}</li>
        <li class="list-group-item"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li class="list-group-item">${employee.getOfficeNumber()}</li>
    </ul>
</section>`
}

module.exports = (data) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header>
        <h1>Team Portfolio</h1>
    </header>
    <main class="d-flex flex-wrap justify-content-center">
        ${createEmployeeCard(data)}
    </main>
    <footer>
    
    </footer>

</body>
</html>
`;
};