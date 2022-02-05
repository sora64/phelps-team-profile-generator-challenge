const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = '';

        this.role = '';
    }

    getRole() {
        this.role = 'Manager';
        console.log(this.role);
        return `${this.role}`;
    }
}

module.exports = Manager;