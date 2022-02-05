const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = '';

        this.role = '';
    }

    getSchool(school) {
        school = this.school;
        console.log(school);
        return school;
    }

    getRole(role) {
        role = 'Intern';
        console.log(role);
        return role;
    }
}

module.exports = Intern;