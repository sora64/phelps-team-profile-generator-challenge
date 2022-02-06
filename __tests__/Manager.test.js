const Manager = require('../lib/Manager.js');

it('creates a manager object', () => {
    const manager = new Manager('Matt');

    expect(manager.name).toBe('Matt');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

it("gets manager's office number", () => {
    const manager = new Manager('Matt');

    const officeNumber = 3;

    expect(manager.getOfficeNumber(officeNumber)).toEqual(expect.any(String));
});


it("gets manager's role", () => {
    const manager = new Manager('Matt');

    const role = 'Manager';

    expect(manager.getRole(role)).toEqual('Manager');
});