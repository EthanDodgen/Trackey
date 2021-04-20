const mysql = require("mysql2")
const db = require("../db/connection.js")
const {
    promptMain
} = require("../js/prompts.js")

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

    //MOVE TO SEPARATE FILE
    addDepartment: () => {
        db.query(`INSERT INTO department(name) VALUES("?")`, (err, rows) => {
            console.table(rows)
        })
    }
}

module.exports = queries