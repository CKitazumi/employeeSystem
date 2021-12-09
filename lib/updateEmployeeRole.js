const db = require("../config/connection");
function updateEmployeeRole (params) {

    const indexMenu = require("../menus/index");
    const sql = `UPDATE employees SET employee_role_id = ? WHERE id = ?`;
    db.query(sql, params, (err, results) => {
        console.log("Role updated!");
        indexMenu();
    })
};

module.exports = updateEmployeeRole;