const Square = require('../lib/square.js');

describe('Square', () => {
  it('should return expected string for square svg', () => {
    const logoName = 'DEF';
    const logoColor = 'white';
    const shapeColor = 'blue';
    const square = new Square(logoName, logoColor, shapeColor);

    // define unique square characteristics
    let shape = "rect x=\"50\" y=\"0\" width=\"200\" height=\"200\"";
    let shapeEnd = "rect";
    const svgContent = `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${shapeColor}"></${shapeEnd}>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="55" fill="${logoColor}"> ${logoName} </text>
    </svg>`;
    
    expect(square.render()).toEqual(svgContent);
  });
});