const inquirer = require("inquirer");
const addADepartment = require("../lib/addADepartment");

const questions = [
    {
        type: "input",
        name: "newDepartment",
        message: "What is the name of the Department you want to add?"
    }
];

function addDepartmentMenu () {
    
    inquirer.prompt(questions).then((data) => {
        addADepartment(data.newDepartment);
    })
};

module.exports = addDepartmentMenu;