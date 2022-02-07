module.exports = generatePage => {
    const data = generatePage;

    const newData = JSON.parse(data);

    console.log(newData);

    const nameArray = [];
    const idArray = [];
    const emailArray = [];
    const roleArray = [];
    const otherArray = [];

    for (let i = 0; i < newData.length; i++) {
        nameArray.push(newData[i].name);
        idArray.push(newData[i].id);
        emailArray.push('<a href="mailto:' + newData[i].email + '">' + newData[i].email + '</a>');
        roleArray.push(newData[i].role);

        if (newData[i].github) {
            otherArray.push('Github: <a href="https://github.com/' + newData[i].github +'/">' + newData[i].github + '</a>'); 
        } else if (newData[i].officeNumber) {
            otherArray.push('Office Number: ' + newData[i].officeNumber);
        } else if (newData[i].school) {
            otherArray.push('School: ' + newData[i].school);
        };
    };

    console.log(nameArray);
    console.log(idArray);
    console.log(emailArray);
    console.log(roleArray);
    console.log(otherArray);

    const employeeDivs = array => {
        for (i = 0; i < array.length; i++) {
            return `
            <div>
                <h1>${roleArray[i]}</h1>
                <h2>Name: ${nameArray[i]}</h2>
                <h3>ID: ${idArray[i]}</h3>
                <h3>Email: ${emailArray[i]}</h3>
                <h3>${otherArray[i]}</h3>
            </div>
            `;
        };
    };

    // const times = newData.length;

    // Array.from({length: times}, () => employeeDivs(newData));

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
${employeeDivs(newData)}
    </body>

    </html>
    `;
};