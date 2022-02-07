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
            <div class="employee column is-two-fifths m-3 card">
                <h1 class="card-header-title is-size-3">${roleArray[i]}</h1>
                <div class="card-content">
                    <h3 class="is-size-4">Name: ${nameArray[i]}</h3>
                    <h3 class="is-size-4">ID: ${idArray[i]}</h3>
                    <h3 class="is-size-4">Email: ${emailArray[i]}</h3>
                    <h3 class="is-size-4">${otherArray[i]}</h3>
                </div>
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
        <title>Employee Roster</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>

    <body>
        <header class="navbar is-danger section">
            <h1 class="navbar-brand is-size-1">
                Employees
            </h1>
        </header>
        <main class="section">
            <div id="employeeContainer columns">
                ${employeeDivs(newData)}
                ${employeeDivs(newData)}
                ${employeeDivs(newData)}
                ${employeeDivs(newData)}
                ${employeeDivs(newData)}
                ${employeeDivs(newData)}
            </div>
        </main>
    </body>

    </html>
    `;
};