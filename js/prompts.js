const inquirer = require('inquirer')

const prompts = {

    promptMain: async () => {
        return inquirer.prompt([{
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: ["View All Departments", "View All Roles",
                "View All Employees", "Add Department",
                "Add Role", "Add Employee",
                "Update Employee Role"
            ]

        }])
    },

    promptDepartment: () => {
        return inquirer.prompt([{
            type: "input",
            name: "department",
            message: "Enter Name of Department"
        }])
    },

    promptRole: () => {
        return inquirer.prompt([{
            type: "input",
            name: "role",
            message: "Enter Role"
        }])
    },

    promptEmployee: () => {
        return inquirer.prompt([{
            type: "input",
            name: "employee",
            message: "Enter New Employee"
        }])
    },

    promptUpdate: () => {
        return inquirer.prompt([{
            type: "input",
            name: "update",
            message: "Update Info"
        }])
    }
}

module.exports = prompts