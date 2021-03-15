const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bangarang00!!',
    database: 'staff'
})

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

//connects to mysql
db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message)
    }
    //console.log('Connected to the staff db.');   
})

module.exports = queries 








