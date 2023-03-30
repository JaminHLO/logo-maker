const Circle = require('../lib/circle.js');

describe('Circle', () => {
  it('should return expected string for circle svg', () => {
    const logoName = 'ABC';
    const logoColor = 'black';
    const shapeColor = 'red';
    const circle = new Circle(logoName, logoColor, shapeColor);

    // define unique circle characteristics
    const shape = "circle cx=\"150\" cy=\"100\" r=\"90\"";
    const shapeEnd = "circle";
    const svgContent = `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${shapeColor}"></${shapeEnd}>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="55" fill="${logoColor}"> ${logoName} </text>
    </svg>`;
    
    expect(circle.render()).toEqual(svgContent);
  });
});