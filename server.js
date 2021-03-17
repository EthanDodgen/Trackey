const cTable = require('console.table')
const queries = require("./js/queries.js")
const prompts = require("./js/prompts.js")
const promptMain = require('./js/prompts.js')

const add = require("./js/update")

prompts.promptMain()
    .then(answer => {
        if (answer.menu === "View All Departments") {
            queries.department()
        }
        
        if (answer.menu === "View All Roles") {
            prompts.promptRole()
        }

        if (answer.menu === "View All Employees") {
            prompts.promptEmployee()
        }

        if (answer.menu === "Add Department") {
            add()
        }

        if (answer.menu === "Add Role") {
            prompts.promptRole()
        }
        
        if (answer.menu === "Add Employee") {
            prompts.promptEmployee()
        }

        if (answer.menu === "Update Employee Role") {
            prompts.prompt()
        }
    })

  

//promptMain()

// queries.employee()

// queries. role()