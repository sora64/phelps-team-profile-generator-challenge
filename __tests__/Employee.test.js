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

    expect(employee.getName()).toEqual(expect.any(String));
});

it("gets employee's id ", () => {
    const employee = new Employee('Matt');

    expect(employee.getId()).toEqual(expect.any(String));
});

it("gets employee's email", () => {
    const employee = new Employee('Matt');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

it("gets employee's role", () => {
    const employee = new Employee('Matt');

    expect(employee.getRole()).toEqual('Employee');
});