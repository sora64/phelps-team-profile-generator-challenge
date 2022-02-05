const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = '';

        this.role = '';
    }

    getSchool() {
        return `${this.school}`;
    }

    getRole() {
        this.role = 'Intern';
        console.log(this.role);
        return `${this.role}`;
    }
}

module.exports = Intern;