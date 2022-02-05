const Intern = require('../lib/Intern.js');

it('creates an intern object', () => {
    const intern = new Intern('Matt');

    expect(intern.name).toBe('Matt');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});


it("gets intern's school", () => {
    const intern = new Intern('Matt');

    const school = 'UoRandom';

    expect(intern.getSchool(school)).toEqual(expect.any(String));
});

it("gets intern's role", () => {
    const intern = new Intern('Matt');

    const role = 'Intern';

    expect(intern.getRole(role)).toEqual('Intern');
});