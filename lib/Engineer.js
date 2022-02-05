const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

        this.github = '';

        this.role = 'Engineer';
    }
}

Engineer.prototype.getGithub = function(github) {
    console.log(github);
    return github;
}

module.exports = Engineer;