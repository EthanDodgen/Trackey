const inquirer = require('inquirer')

const prompts = {

    promptMain: () => {
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
            message: "Enter Name of Department",
        }])
    },

    promptRole: () => {
        return inquirer.prompt([{
                name: "title",
                message: "Enter Title",
            },
            {
                name: "salary",
                message: "What is the Salary of the role?",
            },
            {
                name: "department_id",
                message: "What is the Department does the role belong to?",
            },
        ])
    },

    promptEmployee: () => {
        return inquirer.prompt([{
                name: "first_name",
                message: "Enter employees first name."
            },
            {
                name: "last_name",
                message: "Enter employees last name."
            },
            {
                name: "role_id",
                message: "What is the employees role id?"
            },
            {
                name: "manager_id",
                message: "What is the employees manager id?"
            }
        ])
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