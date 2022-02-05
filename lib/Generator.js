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
                console.log('You entered "Engineer".');
                Engineer.prototype.getInfo();
                return new Engineer;
            }
        });
};

module.exports = Generator;