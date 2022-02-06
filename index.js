const generatePage = require('./src/generatePage');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const gatherInfo = () => {    
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
            Employee.prototype.role = role;
            if (role === 'Engineer') {
                this.currentEmployee = 'Engineer';
                Employee.prototype.getRole(role);
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
                Employee.prototype.getRole(role);
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
                Employee.prototype.getRole(role);
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

gatherInfo()
    // .then(indexData => {
    //     return generatePage(indexData)
    // });