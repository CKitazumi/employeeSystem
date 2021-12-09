const db = require("../config/connection");
const cTable = require('console.table');

function viewAllRoles () {

    const indexMenu = require("../menus/index");
    const sql = "SELECT roles.id, role_name, role_salary, department_name FROM roles, departments WHERE roles.id = departments.id";

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };

        console.table(results)
        indexMenu();
    })
};

module.exports = viewAllRoles;