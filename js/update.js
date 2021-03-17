const db = require("../db/schema.sql")

const add = () => {
    db.query(`INSERT INTO department (name) 
    VALUES(answer.department)`, (err, rows) => {
        console.table(rows)
    })
}

module.exports = add

