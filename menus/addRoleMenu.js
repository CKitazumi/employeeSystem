const inquirer = require("inquirer");
const addARole = require("../lib/addARole");

const currentDepartments = [];
const currentDepartmentIds = {};

const questions = [
  {
    type: "input",
    name: "roleName",
    message: "What is the name of the Role you want to add?",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "What is the Salary of the role?",
  },
  {
    type: "list",
    name: "roleDepartment",
    message: "What Department does the Role belong to?",
    choices: currentDepartments,
  },
];

function addRoleMenu() {

  const db = require("../config/connection");
  const sql = "SELECT * FROM departments";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    for (const key in results) {
      const element = results[key];
        currentDepartments.push(element.department_name)
        currentDepartmentIds[element.department_name] = element.id
    }
  });

  inquirer.prompt(questions).then((data) => {
    const role_department_id = currentDepartmentIds[data.roleDepartment]
    addARole(data.roleName, data.roleSalary, role_department_id);
  });
}

module.exports = addRoleMenu;
