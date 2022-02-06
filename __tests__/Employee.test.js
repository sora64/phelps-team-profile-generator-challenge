const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

it('creates an employee object', () => {
    const employee = new Employee('Matt');

    expect(employee.name).toBe('Matt');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

it("gets employee's name", () => {
    const employee = new Employee('Matt');

    const name = 'Matt'

    expect(employee.getName(name)).toEqual(expect.any(String));
});

it("gets employee's id ", () => {
    const employee = new Employee('Matt');

    const id = "123";

    expect(employee.getId(id)).toEqual(expect.any(String));
});

it("gets employee's email", () => {
    const employee = new Employee('Matt');

    const email = 'abc_employee@employment.com';

    expect(employee.getEmail(email)).toEqual(expect.any(String));
});

it("gets employee's role", () => {
    const employee = new Employee('Matt');

    const role = 'Employee';

    expect(employee.getRole(role)).toEqual('Employee');
});