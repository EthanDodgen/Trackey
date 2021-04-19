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
        .then(answer => {
            if (answer.menu === "View All Departments") {
                queries.department()
                setTimeout(() => {
                    init()
                }, 50)
            }

            if (answer.menu === "View All Roles") {
                queries.role()
                setTimeout(() => {
                    init()
                }, 50)
            }

            if (answer.menu === "View All Employees") {
                queries.employee()
                setTimeout(() => {
                    init()
                }, 50)
            }

            if (answer.menu === "Add Department") {
                prompts.promptDepartment()
                    .then(answer => {
                        console.log(answer)
                    })
                // setTimeout(() => {
                //     init()
                // }, 500)
            }

            if (answer.menu === "Add Role") {
                prompts.promptRole()
                // setTimeout(() => {
                //     init()
                // }, 50)
            }

            if (answer.menu === "Add Employee") {
                prompts.promptEmployee()
                // setTimeout(() => {
                //     init()
                // }, 50)
            }

            if (answer.menu === "Update Employee Role") {
                prompts.promptUpdate()
                // setTimeout(() => {
                //     init()
                // }, 50)
            }
        })
}
init()