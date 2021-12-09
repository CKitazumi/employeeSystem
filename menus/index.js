const inquirer = require("inquirer");
const addDepartmentMenu = require("./addDepartmentMenu");
const addEmployeeMenu = require("./addEmployeeMenu");
const addRoleMenu = require("./addRoleMenu");
const viewAllDepartments = require("../lib/viewAllDepartments");
const viewAllRoles = require("../lib/viewAllRoles");
const viewAllEmployees = require("../lib/viewAllEmployees");
const updateRoleMenu = require("./updateRoleMenu");

const questions = [
    {
        type: "list",
        name: "indexChoice",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role"]
    }
];

function indexMenu () {
    inquirer.prompt(questions).then((data) => {
        switch (data.indexChoice) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add A Department":
                addDepartmentMenu();
                break;
            case "Add A Role":
                addRoleMenu();
                break;
            case "Add An Employee":
                addEmployeeMenu();
                break;
            case "Update An Employee Role":
                updateRoleMenu();
                break;
        
            default:
                console.log("error")
                break;
        }
    })
}

module.exports = indexMenu
