const inquirer = require('inquirer')

const promptMain = () => {
    return inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]

    }])
}

module.exports = promptMain