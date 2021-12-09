const db = require("../config/connection");
const cTable = require('console.table');
function viewAllDepartments () {

    const indexMenu = require("../menus/index");
    const sql = "SELECT * FROM departments";
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        };

        console.table(results)
        indexMenu();
    })
};

module.exports = viewAllDepartments;