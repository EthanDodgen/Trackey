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
                message: "Enter employee's first name."
            },
            {
                name: "last_name",
                message: "Enter employee's last name."
            },
            {
                name: "role_id",
                message: "What is the employee's role id?"
            },
            {
                name: "manager_id",
                message: "What is the employee's manager id?"
            }
        ])
    },

    promptUpdate: () => {
        return inquirer.prompt([{
            name: "employee_name",
            message: "Which employee's role do you want to update?",
            choices: ""
        },
        {
            name: "title",
            message: "What is the employee's title"
        },
        {
            name: "salary",
            message: "What is the employee's salary?"
        },
        {
            name: "department_id",
            message: "What is the employee's department Id."
        }
    ])
    },

    promptEmployees: (rows) => {
        return inquirer.prompt([{
            type: "list",
            name: "employees",
            message: "What would you like to do?",
            choices: rows

        }])
    }
}

module.exports = prompts