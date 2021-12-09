const inquirer = require("inquirer");
const db = require("../config/connection");
const updateEmployeeRole = require("../lib/updateEmployeeRole");

async function updateEmployeeRoleMenu() {
  const currentRoles = [];
  const currentRoleIds = {};
  const allEmployeeData = {};
  const allEmployeeNames = [];

  const sql = "SELECT * FROM roles";
  const sql2 = "SELECT * FROM employees";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    for (const key in results) {
      const element = results[key];
      currentRoles.push(element.role_name);
      currentRoleIds[element.role_name] = element.id;
    }
  });

  db.query(sql2, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
 
    for (const key in results) {
      const element = results[key];
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`] = {};
      const elementData = {};

      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].id = element.id;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_first_name = element.employee_first_name;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_last_name = element.employee_last_name;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_role_id = element.employee_role_id;
      allEmployeeData[`${element.employee_first_name} ${element.employee_last_name}`].employee_department_id = element.employee_department_id;

      allEmployeeNames.push(
        `${element.employee_first_name} ${element.employee_last_name}`
        );
      }
    });
    
  setTimeout(() => {
  const questions = [
    {
      type: "list",
      name: "employee",
      message: "Which Employee?",
      choices: allEmployeeNames,
    },
    {
      type: "list",
      name: "newRole",
      message: "What is the new role?",
      choices: currentRoles,
    },
  ];

    inquirer.prompt(questions).then((data) => {

    const employeeWithNewRole =[];
    for (const key in currentRoleIds) {
      const element = currentRoleIds[key];
      if (key == data.newRole) {
        employeeWithNewRole.push(element)
      }
    }
    for (const key in allEmployeeData) {
      const element = allEmployeeData[key];
      if (key == data.employee) {
        employeeWithNewRole.push(element.id)
      }
    }
  
    updateEmployeeRole(employeeWithNewRole)
  });
  
}, 100)
}

module.exports = updateEmployeeRoleMenu;
