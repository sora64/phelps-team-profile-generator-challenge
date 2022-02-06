const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = 0;

        this.role = '';
    }

    getOfficeNumber(officeNumber) {
        officeNumber = this.officeNumber;
        console.log("Office Number: " + officeNumber);
        return officeNumber;
    }
}

module.exports = Manager;