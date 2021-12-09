const { query } = require("./config/connection.js");
const db = require("./config/connection.js")
const indexMenu = require("./menus/index.js")

function init () {
    indexMenu()
}

init();