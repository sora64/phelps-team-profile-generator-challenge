const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 0;
        this.email = '';
        this.role = 'Employee';
    }

    getInfo() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your employee's name?",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is your employee's id?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your employee's email address?",
                }
            ])
            .then(({ name, id, email }) => {
                this.name = name;
                this.getName(name)
                this.id = id;
                this.getId(id);
                this.email = email;
                this.getEmail(email);
            })
    }

    getName(name) {
        console.log("Name: " + name);
        return name;
    }

    getId(id) {
        console.log("ID: " + id);
        return id;
    }

    getEmail(email) {
        console.log("Email: " + email);
        return email;
    }

    getRole(role) {
        role = this.role;
        console.log('You enterered "' + role +'".');
        return role;
    }
}

module.exports = Employee;