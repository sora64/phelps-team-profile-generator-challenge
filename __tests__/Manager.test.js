const { expect } = require('@jest/globals');
const manager = require('../lib/Manager.js');

it('creates an manager object', () => {
    const manager = new Manager('Matt');

    expect(manager.name).toBe('Matt');
    expect(manager.id).toBe(123456);
    expect(manager.email).toBe('matt_manager@employment.com');
    expect(manager.officeNumber).toBe(expect.any(Number));
});

it("gets manager's name", () => {
    const manager = new Manager('Matt');

    expect(manager.getName()).toEqual(expect.any(String));
});

it("gets manager's id number", () => {
    const manager = new Manager('Matt');

    expect(manager.getId()).toEqual(expect.any(Number));
});

it("gets manager's role", () => {
    const manager = new Manager('Matt');

    expect(manager.getRole()).toEqual('Manager');
});