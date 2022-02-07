// date-and-time package import
const date = require('date-and-time');

// uses data gathered from the user via inquirer (in index.js) to create the layout for the index.html file
module.exports = generatePage => {
    const data = generatePage;

    // parses data returned from the inquirer (in index.js) so it's readable here
    const newDataArray = JSON.parse(data);

    // array for Employee objects' email addresses, which is useful for adding mailto functionality
    const emailArray = [];
    // collects information specific to each type of Employee object: ofice number, GitHub username, or school
    const otherArray = [];

    // pushes relevant Employee object data to the otherArray
    for (let i = 0; i < newDataArray.length; i++) {
        emailArray.push('<a href="mailto:' + newDataArray[i].email + '">' + newDataArray[i].email + '</a>');

        if (newDataArray[i].github) {
            otherArray.push('Github: <a href="https://github.com/' + newDataArray[i].github +'/">' + newDataArray[i].github + '</a>'); 
        } else if (newDataArray[i].officeNumber) {
            otherArray.push('Office Number: ' + newDataArray[i].officeNumber);
        } else if (newDataArray[i].school) {
            otherArray.push('School: ' + newDataArray[i].school);
        };
    };

    // allows the user to see what they've input without having to navigate to the created index.html file right away
    console.log(newDataArray);

    // the following six methods are used to create sections on the index.html page for the information from up to six Employee objects
    const employeeDivOne = array => {
        return `
        <div class="column is-two-fifths block mx-3 card">
            <div class="card-header has-background-grey-light">
                <h1 class="card-header-title is-size-3">${array[0].role}</h1>
            </div>
            <div class="card-content">
                <h3 class="is-size-4">Name: ${array[0].name}</h3>
                <h3 class="is-size-4">ID: ${array[0].id}</h3>
                <h3 class="is-size-4">Email: ${emailArray[0]}</h3>
                <h3 class="is-size-4">${otherArray[0]}</h3>
            </div>
        </div>
        `;
    };

    const employeeDivTwo = array => {
        if (!array[1]) {
            return '';
        } else {
            return `
            <div class="column is-two-fifths block mx-3 card">
                <div class="card-header has-background-grey-light">
                    <h1 class="card-header-title is-size-3">${array[1].role}</h1>
                </div>
                <div class="card-content">
                    <h3 class="is-size-4">Name: ${array[1].name}</h3>
                    <h3 class="is-size-4">ID: ${array[1].id}</h3>
                    <h3 class="is-size-4">Email: ${emailArray[1]}</h3>
                    <h3 class="is-size-4">${otherArray[1]}</h3>
                </div>
            </div>
            `;
        }
    };

    const employeeDivThree = array => {
        if (!array[2]) {
            return '';
        } else {
            return `
            <div class="column is-two-fifths block mx-3 card">
                <div class="card-header has-background-grey-light">
                    <h1 class="card-header-title is-size-3">${array[2].role}</h1>
                </div>
                <div class="card-content">
                    <h3 class="is-size-4">Name: ${array[2].name}</h3>
                    <h3 class="is-size-4">ID: ${array[2].id}</h3>
                    <h3 class="is-size-4">Email: ${emailArray[2]}</h3>
                    <h3 class="is-size-4">${otherArray[2]}</h3>
                </div>
            </div>
            `;
        }
    };

    const employeeDivFour = array => {
        if (!array[3]) {
            return '';
        } else {
            return `
            <div class="column is-two-fifths block mx-3 card">
                <div class="card-header has-background-grey-light">
                    <h1 class="card-header-title is-size-3">${array[3].role}</h1>
                </div>
                <div class="card-content">
                    <h3 class="is-size-4">Name: ${array[3].name}</h3>
                    <h3 class="is-size-4">ID: ${array[3].id}</h3>
                    <h3 class="is-size-4">Email: ${emailArray[3]}</h3>
                    <h3 class="is-size-4">${otherArray[3]}</h3>
                </div>
            </div>
            `;
        }
    };

    const employeeDivFive = array => {
        if (!array[4]) {
            return '';
        } else {
            return `
            <div class="column is-two-fifths block mx-3 card">
                <div class="card-header has-background-grey-light">
                    <h1 class="card-header-title is-size-3">${array[4].role}</h1>
                </div>
                <div class="card-content">
                    <h3 class="is-size-4">Name: ${array[4].name}</h3>
                    <h3 class="is-size-4">ID: ${array[4].id}</h3>
                    <h3 class="is-size-4">Email: ${emailArray[4]}</h3>
                    <h3 class="is-size-4">${otherArray[4]}</h3>
                </div>
            </div>
            `;
        }
    };

    const employeeDivSix = array => {
        if (!array[5]) {
            return '';
        } else {
            return `
            <div class="column is-two-fifths block mx-3 card">
                <div class="card-header has-background-grey-light">
                    <h1 class="card-header-title is-size-3">${array[5].role}</h1>
                </div>
                <div class="card-content">
                    <h3 class="is-size-4">Name: ${array[5].name}</h3>
                    <h3 class="is-size-4">ID: ${array[5].id}</h3>
                    <h3 class="is-size-4">Email: ${emailArray[5]}</h3>
                    <h3 class="is-size-4">${otherArray[5]}</h3>
                </div>
            </div>
            `;
        }
    };

    // initializes the date-and-time package
    const now = new Date();
    // formats data returned from the date-and-time package
    const rightNow = date.format(now, 'MMM DD YYYY');
    // the main format for the index.html file
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>

    <body>
        <header class="navbar is-danger section">
            <h1 class="navbar-brand is-size-1">
                Team Roster
            </h1>
        </header>
        <main class="section has-background-white-ter">
            <div id="employeeContainer" class="columns is-centered is-multiline">
                ${employeeDivOne(newDataArray)}
                ${employeeDivTwo(newDataArray)}
                ${employeeDivThree(newDataArray)}
                ${employeeDivFour(newDataArray)}
                ${employeeDivFive(newDataArray)}
                ${employeeDivSix(newDataArray)}
            </div>
        </main>
        <footer class="footer has-background-grey">
            <h1 class="is-size-5 has-text-white">
                Created and maintained by Alan Phelps, circa ${rightNow}.
            </h1>
        </footer>
    </body>

    </html>
    `;
};