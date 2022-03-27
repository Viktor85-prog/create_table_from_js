const structure = [
    {
        id: 1,
        columnName: 'realName'
    },
    {
        id: 2,
        columnName: 'heroName'
    },
    {
        id: 3,
        columnName: 'yearDebuted'
    },
    {
        id: 4,
        columnName: 'creator'
    },
    {
        id: 5,
        columnName: 'firstAppearance'
    }
]


// const data = [
//     {
//         realName: 'Thor',
//         heroName: 'Thor',
//         yearDebuted: '1962 (August)',
//         creator: 'Stan Lee, Jack Kirby',
//         firstAppearance: 'Journey into Mystery #83'
//     },
//     {
//         realName: 'Steven "Steve" Rogers',
//         heroName: 'Captain America',
//         yearDebuted: '1941 (March)',
//         creator: 'Joe Simon, Jack Kirby',
//         firstAppearance: 'Captain America Comics #1'
//     },
//     {
//         realName: 'Natalia Alianovna Romanova',
//         heroName: 'Black Widow',
//         yearDebuted: '1964 (January)',
//         creator: 'Stan Lee, Don Rico, Don Heck',
//         firstAppearance: 'Tales of Suspense #52'
//     },
//     {
//         realName: 'Anthony Edward "Tony" Stark',
//         heroName: 'Iron Man',
//         yearDebuted: '1963 (March)',
//         creator: 'Stan Lee, Jack Kirby, Don Heck',
//         firstAppearance: 'Tales of Suspense #39'
//     },
//     {
//         realName: 'Robert Bruce Banner',
//         heroName: 'Hulk',
//         yearDebuted: '1962 (May)',
//         creator: 'Stan Lee, Jack Kirby',
//         firstAppearance: 'The Incredible Hulk #1'
//     }
// ]
const data2 = [
    ['Thor', 'Thor', '1962 (August)', 'Stan Lee, Jack Kirby', 'Journey into Mystery #83'],
    ['Steven "Steve" Rogers', 'Captain America', '1941 (March)', 'Joe Simon, Jack Kirby', 'Captain America Comics #1'],
    ['Natalia Alianovna Romanova', 'Black Widow', '1964 (January)', 'Stan Lee, Don Rico, Don Heck', 'Tales of Suspense #52'],
    ['Anthony Edward "Tony" Stark', 'Iron Man', '1963 (March)', 'Stan Lee, Jack Kirby, Don Heck', 'Tales of Suspense #39'],
    ['Robert Bruce Banner', 'Hulk', '1962 (May)', 'Stan Lee, Jack Kirby', 'The Incredible Hulk #1']
]



function appendToHTML(id, HTMLString) {
    var htmlElement = document.getElementById(id);
    if (htmlElement) {
        htmlElement.innerHTML += HTMLString;
    }
}

function generateTableContent(id, structure, data) {
    cleanInnerHTML(id)
    for (var i = 0; i < structure.length; i++) {
        appendToHTML(id, templateIColumnTableItem(structure[i]));
        generateRows(structure[i], data, i, structure[i].id)
    }
}

function templateIColumnTableItem(structure) {
    var template =
        '<div class="column" id=' + structure.id + '></div> '
    return template;
}

function generateRows(structure, data, i, id) {
    appendToHTML(id, templateRowItem(structure.columnName))
    for (var j = 0; j < data.length; j++) {
        appendToHTML(id, templateRowItem(data[j][i]));
    }
}

function templateRowItem(data) {
    var template =
        '<div class="cell">' + data + '</div> ';
    return template;
}

// generateTableContent('table', structure, data2) 

function cleanInnerHTML(id) {
    document.getElementById(id).innerHTML = "";
}