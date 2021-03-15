const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bangarang00!!',
    database: 'staff'
})


const cTable = require('console.table')
const express = require("express")
const PORT = process.env.PORT || 3001
const app = express()
const queries = require("./js/queries.js")
const prompts = require("./js/prompts.js")
const promptMain = require('./js/prompts.js')

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
    console.log('Connected to the staff db.');   
})

const start = () => {
    db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows)
    })
}
start()

//console.log(queries[0].department)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})