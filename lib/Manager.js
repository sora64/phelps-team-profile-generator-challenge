const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', role = 'Manager', officeNumber = '') {
        super(name, id, email, role);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber(officeNumber) {
        officeNumber = this.officeNumber;
        return officeNumber;
    }
}

module.exports = Manager;