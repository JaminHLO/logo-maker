const Triangle = require('../lib/triangle.js');

// test to make sure we're getting the expected svg string
describe('Triangle', () => {
  it('should return expected string for triangle svg', () => {
    const shapeColor = 'orange';
    const triangle = new Triangle(shapeColor);

    // define unique triangle characteristics
    let shape = "polygon points=\"150, 18 244, 182 56, 182\"";
    const svgContent = `<${shape} fill="${shapeColor}"/>`;

    expect(triangle.render()).toEqual(svgContent);
  });

});