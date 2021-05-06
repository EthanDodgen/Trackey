//connects sql to database
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bangarang00!!",
    database: "staff"
})

db.connect(function (err) {
    if (err) throw err
})

module.exports = db