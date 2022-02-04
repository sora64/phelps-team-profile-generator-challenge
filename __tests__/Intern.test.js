const Intern = require('../lib/Intern.js');

it('creates an intern object', () => {
    const intern = new Intern('Matt');

    expect(intern.name).toBe('Matt');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

it("gets intern's name", () => {
    const intern = new Intern('Matt');

    expect(intern.getName()).toEqual(expect.any(String));
});

it("gets intern's id number", () => {
    const intern = new Intern('Matt');

    expect(intern.getId()).toEqual(expect.any(String));
});

it("gets intern's school", () => {
    const intern = new Intern('Matt');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

it("gets intern's role", () => {
    const intern = new Intern('Matt');

    expect(intern.getRole()).toEqual('Intern');
});