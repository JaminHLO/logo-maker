// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Enter three character logo name:',
        validate: async (input) => {
            if (input.length >3) {
                return 'Please limit logo name to three characters';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Enter the text color:',
    },
    {
        type: 'list',
        name: 'shapeName',
        message: 'Enter a logo shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:',
    }
  ];

// Create a function to write README file
function writeToFile(answers) {

    const {logoName, logoColor, shapeName, shapeColor} = answers;

    let shape = "";
    let shapeEnd = "";
    // define shape
    if (shapeName === 'circle') {
        shape = "circle cx=\"150\" cy=\"100\" r=\"90\"";
        shapeEnd = "circle";
    } else if (shapeName === 'triangle') {
        shape = "polygon points=\"150,0 275,200 25,200\"";
        shapeEnd = "polygon";
    } else if (shapeName === 'square') {
        shape = "rect x=\"50\" y=\"0\" width=\"200\" height=\"200\"";
        shapeEnd = "rect";
    } 

    //create svg file
    const svgContent = 
    `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${shapeColor}"></${shapeEnd}>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="55" fill="${logoColor}"> ${logoName} </text>
    </svg>`;

    console.log(svgContent);

    fs.writeFile('logo.svg', svgContent, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers);
    });

    
}

// Function call to initialize app
init();
