const db = require("../config/connection");


function addARole (role_name, role_salary, role_department_id) {
    const indexMenu = require("../menus/index")
    const sql = "INSERT INTO roles (role_name, role_salary, role_department_id) VALUES (?, ?, ?)";
    db.query(sql, [role_name, role_salary, role_department_id], (err, results) => {
    if (err) {
        console.log(err);
        return;
    };

    console.log(`Success, ${role_name} Added to roles`)
    indexMenu();

    })
};

module.exports = addARole;