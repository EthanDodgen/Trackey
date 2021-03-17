const cTable = require('console.table')
const queries = require("./js/queries.js")
const prompts = require("./js/prompts.js")
const promptMain = require('./js/prompts.js')

prompts.promptMain()
    .then(answer => {
        if (answer.menu === "View All Departments") {
            queries.department()
        }
        
        if (answer.menu === "View All Roles") {
            queries.role()
        }

        if (answer.menu === "View All Employees") {
            queries.employee()
        }

        if (answer.menu === "Add Department") {
            prompts.promptDepartment
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

  

//promptMain()

// queries.employee()

// queries. role()