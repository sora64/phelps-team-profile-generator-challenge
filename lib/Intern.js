const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = '';

        this.role = 'Intern';
    }

    getSchool(school) {
        school = this.school;
        console.log("School: " + school);
        return school;
    }
}

module.exports = Intern;