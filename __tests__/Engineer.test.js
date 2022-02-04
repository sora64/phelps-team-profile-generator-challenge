const Engineer = require('../lib/Engineer.js');

it('creates an engineer object', () => {
    const engineer = new Engineer('Matt');

    expect(engineer.name).toBe('Matt');
    expect(engineer.id).toBe(123456);
    expect(engineer.email).toBe('matt_engineer@employment.com');
    expect(engineer.github).toBe('mattGH');
});

it("gets engineer's name", () => {
    const engineer = new Engineer('Matt');

    expect(engineer.getName()).toEqual(expect.any(String));
});

it("gets engineer's id number", () => {
    const engineer = new Engineer('Matt');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

it("gets engineer's GitHubprofile link", () => {
    const engineer = new Engineer('Matt');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

it("gets engineer's role", () => {
    const engineer = new Engineer('Matt');

    expect(engineer.getRole()).toEqual('Engineer');
});