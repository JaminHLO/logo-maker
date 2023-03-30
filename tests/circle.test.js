const Circle = require('../lib/circle.js');

// test to make sure we're getting the expected svg string
describe('Circle', () => {
  it('should return expected string for circle svg', () => {
    const shapeColor = 'red';
    const circle = new Circle(shapeColor);

    // define unique circle characteristics
    const shape = "circle cx=\"150\" cy=\"100\" r=\"90\"";
    const svgContent = `<${shape} fill="${shapeColor}"/>`;
    
    expect(circle.render()).toEqual(svgContent);
  });
});