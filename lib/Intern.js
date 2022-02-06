const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', role = 'Engineer', school = '') {
        super(name, id, email, role);

        this.school = school;
    }

    getSchool(school) {
        school = this.school;
        return school;
    }
}

module.exports = Intern;