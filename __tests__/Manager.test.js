const Manager = require('../lib/Manager.js');

it('creates a manager object', () => {
    const manager = new Manager('Matt');

    expect(manager.name).toBe('Matt');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

it("gets manager's name", () => {
    const manager = new Manager('Matt');

    expect(manager.getName()).toEqual(expect.any(String));
});

it("gets manager's id number", () => {
    const manager = new Manager('Matt');

    expect(manager.getId()).toEqual(expect.any(String));
});

it("gets manager's role", () => {
    const manager = new Manager('Matt');

    expect(manager.getRole()).toEqual('Manager');
});