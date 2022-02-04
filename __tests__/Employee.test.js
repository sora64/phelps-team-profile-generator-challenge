const Employee = require('../lib/Employee.js');

it('creates an employee object', () => {
    const employee = new Employee('Matt');

    expect(employee.name).toBe('Matt');
    expect(employee.id).toBe(123456);
    expect(employee.email).toBe('matt_employee@employment.com');
});

it("gets employee's name", () => {
    const employee = new Employee('Matt');

    expect(employee.getName()).toEqual(expect.any(String));
});

it("gets employee's id number", () => {
    const employee = new Employee('Matt');

    expect(employee.getId()).toEqual(expect.any(Number));
});

it("gets employee's role", () => {
    const employee = new Employee('Matt');

    expect(employee.getRole()).toEqual('Employee');
});