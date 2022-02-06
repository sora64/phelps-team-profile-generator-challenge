const generatePage = require('./src/generatePage');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const employeeArray = []
let dataArray = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer', 'Manager', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your employee's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is your employee's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your employee's email address? (Make sure to enter a valid email address!)",
        validate: function(email) {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    }
];

const gatherInfo = answers => {
    const role = answers.role;
    const name = answers.name;
    const id = answers.id;
    const email = answers.email;
    Employee.prototype.getRole(role);
    Employee.prototype.getName(name);
    Employee.prototype.getId(id);
    Employee.prototype.getEmail(email);
    const addQuestions = [];
    if (role === 'Engineer') {
        addQuestions.push(
            {
                type: 'input',
                name: 'github',
                message: "What is your engineer's GitHub username?"
            }
        )
    } else if (role === 'Manager') {
        addQuestions.push(
            {
                type: 'number',
                name: 'officeNumber',
                message: "What is your manager's office number?"
            }
        )
    } else if (role === "Intern") {
        addQuestions.push(
            {
                type: 'input',
                name: 'school',
                message: "What is the name of your interns's school?"
            }
        )
    }
    return addQuestions;
};

const init = () => {
    inquirer
    .prompt(questions)
    .then((answers) => {
        dataArray.push(answers);
        inquirer.prompt(gatherInfo(answers))
        .then((gatheredInfo) => {
            dataArray.push(gatheredInfo);
            const github = gatheredInfo.github;
            const officeNumber = gatheredInfo.officeNumber;
            const school = gatheredInfo.school
            if (github) {
                Engineer.prototype.getGithub(github);
                const engineer = new Engineer(dataArray[0].name, dataArray[0].id, dataArray[0].email, dataArray[0].role, dataArray[1].github);
                employeeArray.push(engineer);
                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'again',
                        message: 'Would you like to add another employee?',
                        default: true
                    }
                )
                .then(({ again }) => {
                    if (again) {
                        dataArray = [];
                        init();
                    } else {
                        console.log(employeeArray);
                    };
                });
                return engineer;
            } else if (officeNumber) {
                Manager.prototype.getOfficeNumber(officeNumber);
                const manager = new Manager(dataArray[0].name, dataArray[0].id, dataArray[0].email, dataArray[0].role, dataArray[1].officeNumber);
                employeeArray.push(manager);
                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'again',
                        message: 'Would you like to add another employee?',
                        default: true
                    }
                )
                .then(({ again }) => {
                    if (again) {
                        dataArray = [];
                        init();
                    } else {
                        console.log(employeeArray);
                    };
                });
                return manager;
            } else if (school) {
                Intern.prototype.getSchool(school);
                const intern = new Intern(dataArray[0].name, dataArray[0].id, dataArray[0].email, dataArray[0].role, dataArray[1].school);
                employeeArray.push(intern);
                inquirer.prompt(
                    {
                        type: 'confirm',
                        name: 'again',
                        message: 'Would you like to add another employee?',
                        default: true
                    }
                )
                .then(({ again }) => {
                    if (again) {
                        dataArray = [];
                        init();
                    } else {
                        console.log(employeeArray);
                    };
                });
                return intern;
            };
        });
    });
};

init();