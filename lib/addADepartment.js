const db = require("../config/connection");

function addADepartment (userInput) {
    const indexMenu = require("../menus/index")
    const sql = "INSERT INTO departments (department_name) VALUES (?)";
    db.query(sql, userInput, (err, results) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log(`
Success, ${userInput} Added to Departments`)
    indexMenu();
    })
};

module.exports = addADepartment;