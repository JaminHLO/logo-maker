const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
  it('should return expected string for triangle svg', () => {
    const logoName = 'GHI';
    const logoColor = 'FFFF';
    const shapeColor = 'orange';
    const triangle = new Triangle(logoName, logoColor, shapeColor);

    // define unique triangle characteristics
    let shape = "polygon points=\"150,0 275,200 25,200\"";
    let shapeEnd = "polygon";
    const svgContent = `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${shapeColor}"></${shapeEnd}>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="55" fill="${logoColor}"> ${logoName} </text>
    </svg>`;

    expect(triangle.render()).toEqual(svgContent);
  });

});