const Shapes = require('../lib/shapes.js');

// test to make sure Shapes' render function is not run either directly or by
// a child class that doesn't polymorph it
describe('Shapes', () => {
  it('Should throw error if render() is called', () => {
    // pass basic inputs for Shapes class, expecting to throw error on render()
    const shapeColor = 'black';
    const shapes = new Shapes(shapeColor);
    const err = new Error('Child class must implement a render() method.')

    expect(shapes.render).toThrow(err);
  });
});
