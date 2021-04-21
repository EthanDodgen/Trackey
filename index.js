const queries = require("./js/queries.js")
const prompts = require("./js/prompts.js")
const db = require("./db/connection.js")
const logo = require("asciiart-logo")

// Display logo text
const graphic = () => {
    const logoText = logo({
        name: "Trackey"
    }).render()

    console.log(logoText)
}
graphic()

const init = () => {
    prompts.promptMain()
        .then(async (answer) => {
            if (answer.menu === "View All Departments") {
                queries.department(init)
            }

            if (answer.menu === "View All Roles") {
                queries.role(init)
            }

            if (answer.menu === "View All Employees") {
                queries.employee(init)
            }

            if (answer.menu === "Add Department") {
                prompts.promptDepartment()
                    .then(answer => {
                        const sql = (`INSERT INTO department(name) VALUES(?)`)
                        const params = answer.department

                        db.query(sql, params, function (err, result) {
                            if (err) {
                                console.log(err)
                            }
                            init()
                        })
                    })
            }

            if (answer.menu === "Add Role") {
                prompts.promptRole()
                    .then(answer => {
                        console.log(answer)
                        const sql = (`INSERT INTO role(title, salary, department_id) VALUES(?, ?, ?)`)
                        const params = [answer.title, answer.salary, answer.department_id]

                        db.query(sql, params, function (err, result) {
                            if (err) {
                                console.log(err)
                            }
                            init()
                        })
                    })
            }

            if (answer.menu === "Add Employee") {
                prompts.promptEmployee()
                .then(answer => {
                    console.log(answer)
                    const sql = (`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)`)
                    const params = [answer.first_name, answer.last_name, answer.role_id, answer.manager_id]

                    db.query(sql, params, function (err, result) {
                        if (err) {
                            console.log(err)
                        }
                        init()
                    })
                })
            }
        })
}

init()