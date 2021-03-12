const mysql = require('mysql2')
const connection = mysql.createConnection({
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


// db.all(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })



//connects to mysql
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message)
    }

    console.log('Connected to the MySQL server.')
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})