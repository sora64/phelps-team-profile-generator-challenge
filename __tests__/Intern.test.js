const { expect, it } = require('@jest/globals');
const intern = require('../lib/Intern.js');

it('creates an intern object', () => {
    const intern = new Intern('Matt');

    expect(intern.name).toBe('Matt');
    expect(intern.id).toBe(123456);
    expect(intern.email).toBe('matt_intern@employment.com');
    expect(intern.school).toBe(expect.any(String));
});

it("gets intern's name", () => {
    const intern = new Intern('Matt');

    expect(intern.getName()).toEqual(expect.any(String));
});

it("gets intern's id number", () => {
    const intern = new Intern('Matt');

    expect(intern.getId()).toEqual(expect.any(Number));
});

it("gets intern's school", () => {
    const intern = new Intern('Matt');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

it("gets intern's role", () => {
    const intern = new Intern('Matt');

    expect(intern.getRole()).toEqual('Intern');
});