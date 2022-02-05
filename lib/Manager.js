const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.officeNumber = '';

        this.role = '';
    }

    getRole(role) {
        role = 'Manager';
        console.log(role);
        return role;
    }
}

module.exports = Manager;