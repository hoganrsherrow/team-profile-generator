const fs = require('fs');
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template.js');
const {
    writeFile,
    copyFile
} = require('./src/page-generator.js');
//const { off } = require('process');
//const { triggerAsyncId } = require('async_hooks');

var employeeData = [];

const promptUser = () => {
    // Create Array to hold employee objects if one does not exist w/n function
    // if(!employeeData) {
    //    var employeeData = [];
    // }
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name for the employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter an id number for the employee.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter an email address for the employee.");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Manager', new inquirer.Separator(), 'Engineer', new inquirer.Separator(), 'Intern']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the office number for this manager?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please provide an office number for the manager.");
                    return false;
                }
            },
            when: ({
                role
            }) => role == 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter a github username for the engineer.");
                    return false;
                }
            },
            when:({
                role
            }) => role == 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.");
                    return false;
                }
            },
            when:({
                role
            }) => role == 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add another employee?",
            default: false
        }
    ])
    .then(data => {
        employeeData.push(data);
        if (data.confirmAddEmployee) {
            return promptUser();
        } else {
            console.log(employeeData);
            return employeeData;
        }
    })
};

// copy CSS file from /src to /dist
copyFile();
// Initiate inquirer for the user and copy data
promptUser()
    .then( () => {
         return pageTemplate(employeeData);
    })
    .then(template => {
        writeFile(template);
    });

//console.log("I made it to the end.");