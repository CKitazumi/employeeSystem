const db = require("../config/connection");
const cTable = require('console.table');

function viewAllEmployees () {

    const indexMenu = require("../menus/index");
    const sql = "SELECT employees.id, employee_first_name, employee_last_name, role_name, role_salary, department_name, employee_manager FROM employees, roles, departments WHERE employees.employee_role_id = roles.id AND employees.employee_department_id = departments.id";

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };

        console.table(results);
        indexMenu();
    })
};

module.exports = viewAllEmployees;