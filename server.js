const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bangarang00!!',
    database: 'staff'
})

const inquirer = require('inquirer')
const cTable = require('console.table')
const express = require("express")
const PORT = process.env.PORT || 3001
const app = express()
const queries = require("./js/queries.js")

app.use(express.json())
// Express middleware
app.use(express.urlencoded({
    extended: false
}))

//connects to mysql
db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message)
    }
    console.log('Connected to the staff db.')
})


console.log(queries.department)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})