const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

        this.github = '';

        this.role = 'Engineer';
    }

    getGithub(github) {
        github = this.github;
        console.log(github);
        return github;
    }

    getRole(role) {
        role = "Engineer";
        console.log(role);
        return role;
    }
}

module.exports = Engineer;