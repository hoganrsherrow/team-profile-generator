const fs = require('fs');
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template.js');
const { writeFile, copyFile } = require('./src/page-generator.js');

const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: name => {
            if(name) {
                return true;
            } else {
                return false;
            }
        }
    }])
};

//copyFile();
//writeFile(pageTemplate());
promptUser()
    .then(data => {
        console.log(data.name);
    });
//console.log("I made it to the end.");