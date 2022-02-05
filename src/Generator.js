const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

function Generator() {
    this.currentEmployee = '';
}

Generator.prototype.gatherInfo = function() {    
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'role',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Manager', 'Intern']
            }
        )
        .then(({ role }) => {
            if (role === 'Engineer') {
                this.currentEmployee = 'Engineer';
                console.log('You entered "Engineer".');
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is your enineer's GitHub username?"
                    }
                ).then(({ github }) => {
                    Engineer.prototype.github = github;
                    Engineer.prototype.getGithub(github);
                    Engineer.prototype.getInfo();
                    return new Engineer;
                });  
            } else if (role === 'Manager') {
                this.currentEmployee = 'Manager';
                console.log('You entered "Manager".');
                return inquirer.prompt(
                    {
                        type: 'number',
                        name: 'officeNumber',
                        message: "What is your manager's office number?"
                    }
                ).then(({ officeNumber }) => {
                    Manager.prototype.officeNumber = officeNumber;
                    Manager.prototype.getOfficeNumber(officeNumber);
                    Manager.prototype.getInfo();
                    return new Manager;
                });
            } else if (role === 'Intern') {
                this.currentEmployee = 'Intern';
                console.log('You enetered "Intern".');
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'school',
                        message: "What is the name of your interns's school?"
                    }
                ).then(({ school }) => {
                    Intern.prototype.school = school;
                    Intern.prototype.getSchool(school);
                    Intern.prototype.getInfo();
                    return new Intern;
                });  
            };
        });
};

module.exports = Generator;