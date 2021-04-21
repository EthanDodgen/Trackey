const mysql = require("mysql2")
const db = require("../db/connection.js")

//SQL Queries
const queries = {

    department: (callbacks) => {
        db.query(`SELECT * FROM department`, (err, rows) => {
            console.table(rows)
            callbacks()
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

    //finds all employees, joins with roles and departments to display their roles, salaries, departments, and managers
    allEmployee: () => {
        db.query(`SELECT first_name, last_name FROM employee`, (err, rows) => {
            console.table(rows)
        })

    }
}

module.exports = queries