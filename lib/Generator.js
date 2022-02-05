const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

function Generator() {
    this.currentEmployee;
}

Generator.prototype.generatePage = function() {
    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Manager', 'Intern']
        })
        .then(({ role }) => {
            if (role == 'Engineer') {
                console.log('You entered "Engineer".')
                this.generateEngineer();
            }
        });
};

Generator.prototype.generateEngineer = function() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is your engineer's name?"
            },
            {
                type: 'text',
                name: 'id',
                message: "What is your engineer's id?" 
            },
            {
                type: 'text',
                name: 'email',
                message: "What is your engineer's email?" 
            },
            {
                type: 'text',
                name: 'github',
                message: "What is your engineer's GitHub username?" 
            }
        ])
        .then(({ data }) => {
            console.log(data);
        });
}

module.exports = Generator;