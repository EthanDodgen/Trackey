const mysql = require("mysql2")
const db = require("../db/connection.js")


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

    allEmployee: (callback) => {
        db.query(`SELECT first_name, last_name FROM employee`, (err, rows) => {
            const employees = rows.map((employee) => {
                return `${employee.first_name} ${employee.last_name}`
            })
            callback(employees)
        })

    }
}

module.exports = queries