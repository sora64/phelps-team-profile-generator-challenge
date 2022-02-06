const Engineer = require('../lib/Engineer.js');

it('creates an engineer object', () => {
    const engineer = new Engineer('Matt');

    expect(engineer.name).toBe('Matt');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

it("gets engineer's GitHubprofile link", () => {
    const engineer = new Engineer('Matt');

    const github = 'random1234';

    expect(engineer.getGithub(github)).toEqual(expect.any(String));
});

it("gets engineer's role", () => {
    const engineer = new Engineer('Matt');

    const role = 'Engineer';

    expect(engineer.getRole(role)).toEqual('Engineer');
});