const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bangarang00!!',
    database: 'staff'
})
const express = require("express")
const PORT = process.env.PORT || 3001
const app = express()

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

db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(rows)
  })


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})