const inquirer = require('inquirer');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = '';
        this.email = '';
        this.role = 'Employee';
    }

    getInfo() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "What is your employee's name?",
                    default: 'Example: Steven Universe'
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "What is your employee's id?",
                    default: 'Example: 12345'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "What is your employee's email address?",
                    default: 'Examle: abc_employee@employment.com'
                }
            ])
            .then(({ name, id, email, role }) => {
                this.name = name;
                this.getName(name)
                this.id = id;
                this.getId(id);
                this.email = email;
                this.getEmail(email);
                this.role = role;
                this.getRole(role);
            })
    }

    getName(name) {
        console.log(name);
        return name;
    }

    getId(id) {
        console.log(id);
        return id;
    }

    getEmail(email) {
        console.log(email);
        return email;
    }

    getRole(role) {
        console.log(role);
        return role;
    }
}

module.exports = Employee;