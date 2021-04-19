const mysql = require("mysql2")
const db = require("../db/connection.js")
const { promptMain } = require("../js/prompts.js")

//SQL Queries
const queries = {

    department: (callback) => {
        db.query(`SELECT * FROM department`, (err, rows) => {
            console.table(rows)
            callback()
        })
    },
    
    role: (callback) => {
        db.query(`SELECT * FROM role`, (err, rows) => {
            console.table(rows)
            callback()
        })
    },

    employee: (callback) => {
        db.query(`SELECT * FROM employee`, (err, rows) => {
            console.table(rows)
            callback()
        })
    },
    
    

}

module.exports = queries