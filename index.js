const fs = require('fs');
const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: ''
    }])
};