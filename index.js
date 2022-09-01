const fs = require('fs');
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template.js');
const { writeFile, copyFile } = require('./src/page-generator.js');

const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: ''
    }])
};

copyFile();
writeFile(pageTemplate());
console.log("I made it to the end.");