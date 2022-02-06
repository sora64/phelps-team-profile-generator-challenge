const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = 0, email = '', role = 'Engineer', school = '') {
        super(name, id, email, role);

        this.school = school;
    }

    getSchool(school) {
        school = this.school;
        return school;
    }
}

module.exports = Intern;