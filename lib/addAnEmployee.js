const db = require("../config/connection");


function addAnEmployee (employee_first_name, employee_last_name, employee_role_id, employee_department_id, employee_manager) {
    const indexMenu = require("../menus/index")
    const sql = "INSERT INTO employees (employee_first_name, employee_last_name, employee_role_id, employee_department_id, employee_manager) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [employee_first_name, employee_last_name, employee_role_id, employee_department_id, employee_manager], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };

    console.log(`Success, ${employee_first_name} ${employee_last_name} Added to roles`)
    indexMenu();
    })
};

module.exports = addAnEmployee;