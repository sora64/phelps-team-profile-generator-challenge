const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

function Generator() {
    this.currentEmployee;
}

Generator.prototype.gatherInfo = function() {    
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'role',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Manager', 'Intern']
            }
        )
        .then(({ role }) => {
            if (role == 'Engineer') {
                console.log('You entered "Engineer".');
                inquirer.prompt(
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is your enineer's GitHub username?"
                    }
                ).then(({ github }) => {
                    Engineer.prototype.github = github;
                    Engineer.prototype.getGithub();
                    Engineer.prototype.getInfo();
                    return new Engineer;
                });
                
            } else if (role == 'Manager') {
                console.log('You entered "Manager".');
                Manager.prototype.getInfo();
                return new Manager;
            } else if (role == 'Intern') {
                console.log('You enetered "Intern".');
                Intern.prototype.getInfo();
                return new Intern;
            }
        });
};

module.exports = Generator;