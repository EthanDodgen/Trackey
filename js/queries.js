const mysql = require("mysql2")
const db = require("../db/connection.js")
const { promptMain } = require("../js/prompts.js")

//SQL Queries
const queries = {

    department: () => {
        db.query(`SELECT * FROM department`, (err, rows) => {
            console.table(rows)
        })
    },
    
    role: () => {
        db.query(`SELECT * FROM role`, (err, rows) => {
            console.table(rows)
        })
    },

    employee: () => {
        db.query(`SELECT * FROM employee`, (err, rows) => {
            console.table(rows)
        })
    }
}

module.exports = queries