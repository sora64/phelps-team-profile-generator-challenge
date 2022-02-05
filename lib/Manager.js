const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = 0;

        this.role = '';
    }

    getOfficeNumber(officeNumber) {
        officeNumber = this.officeNumber;
        console.log(officeNumber);
        return officeNumber;
    }

    getRole(role) {
        role = 'Manager';
        console.log(role);
        return role;
    }
}

module.exports = Manager;