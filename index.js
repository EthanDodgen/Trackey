const queries = require("./js/queries.js")
const prompts = require("./js/prompts.js")
const db = require("./db/connection.js")
const logo = require("asciiart-logo")

// Display logo text
const graphic = () => {
    const logoText = logo({ name: "TRACKEY" }).render()
  
    console.log(logoText)
}
graphic()
  

prompts.promptMain()
    .then(answer => {
        if (answer.menu === "View All Departments") {
            queries.department()
            prompts.promptMain()
        }

        if (answer.menu === "View All Roles") {
            queries.role()
        }

        if (answer.menu === "View All Employees") {
            queries.employee()
        }

        if (answer.menu === "Add Department") {
            prompts.promptDepartment()
        }


        if (answer.menu === "Add Role") {
            prompts.promptRole()
        }

        if (answer.menu === "Add Employee") {
            prompts.promptEmployee()
        }

        if (answer.menu === "Update Employee Role") {
            prompts.promptUpdate()
        }
    })

