const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', role = 'Engineer', github = '') {
        super(name, id, email, role);

        this.github = github;
    }

    getGithub(github) {
        this.github = github;
        return github;
    }
}

module.exports = Engineer;