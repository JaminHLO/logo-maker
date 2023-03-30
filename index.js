// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Include subclasses of Shapes: circle, square, triangle
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');


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
        message: 'Enter the text color (if hexadecimal add leading #):',
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
        message: 'Enter the shape color (if hexadecimal add leading #):',
    }
  ];

// Create a function to write README file
function writeToFile(answers) {

    const {logoName, logoColor, shapeName, shapeColor} = answers;

    let svgContent = "";
    // render a new svg file based on user input using OOP
    if (shapeName === 'circle') {
        const newCircle = new Circle(logoName, logoColor, shapeColor);
        svgContent = newCircle.render();
    } else if (shapeName === 'triangle') {
        const newTriangle = new Triangle(logoName, logoColor, shapeColor);
        svgContent = newTriangle.render();
    } else if (shapeName === 'square') {
        const newSquare = new Square(logoName, logoColor, shapeColor);
        svgContent = newSquare.render();
    } 

    // write new svg to file
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
