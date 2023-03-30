const Shapes = require('../lib/shapes.js');

describe('Shapes', () => {
  it('should throw error if render() is called', () => {
    // pass basic inputs for Shapes class, expecting to throw error on render()
    const logoName = 'ABC';
    const logoColor = 'black';
    const shapes = new Shapes(logoName, logoColor);
    const err = new Error('Child class must implement a render() method.')

    expect(shapes.render).toThrowError(err);
  });
});
