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
                        console.log(answer.department)
                    })
            }

            if (answer.menu === "Add Role") {
                prompts.promptRole()
                    .then(answer => {
                        console.log(answer.role)
                    })

            }

            if (answer.menu === "Add Employee") {
                prompts.promptEmployee()
                    .then(answer => {
                        console.log(answer.employee)
                    })
            }
        })
}

init()