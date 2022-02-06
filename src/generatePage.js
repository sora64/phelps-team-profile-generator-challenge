module.exports = generatePage => {
    const data = generatePage;

    const newData = JSON.parse(data);

    console.log(newData);

    const nameArray = [];
    const idArray = [];
    const emailArray = [];
    const roleArray = [];

    const githubArray = [];
    const officeNumberArray = [];
    const schoolArray = [];

    for (let i = 0; i < newData.length; i++) {
        nameArray.push(newData[i].name);
        idArray.push(newData[i].id);
        emailArray.push(newData[i].email);
        roleArray.push(newData[i].role);

        if (newData[i].github) {
            githubArray.push(newData[i].github)
        } else if (newData[i].officeNumber) {
            officeNumberArray.push(newData[i].officeNumber);
        } else if (newData[i].school) {
            schoolArray.push(newData[i].school);
        };
    };

    console.log(nameArray);
    console.log(idArray);
    console.log(emailArray);
    console.log(roleArray);
    console.log(githubArray);
    console.log(officeNumberArray);
    console.log(schoolArray);

    const names = array => {
        for (i = 0; i < array.length; i++) {
            return array[i];
        }
    }

    const namesHeadings = array => {
        for (i = 0; i< array.length; i++) {
            return `
            <h2>${names(array[i])}</h2>
            `
        };
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>

    <body>
        <h1>${newData[0].role}</h1>
    ${namesHeadings(nameArray)}
    </body>

    </html>
    `;
};