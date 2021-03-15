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








