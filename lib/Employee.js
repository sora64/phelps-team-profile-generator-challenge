class Employee {
    constructor(name = '', id = 0, email = '', role = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(name) {
        this. name = name;
        return name;
    }

    getId(id) {
        this.id = id;
        return id;
    }

    getEmail(email) {
        this.email = email;
        return email;
    }

    getRole(role) {
        this.role = role;
        return role;
    }
}

module.exports = Employee;