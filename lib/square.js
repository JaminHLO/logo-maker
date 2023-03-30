const Shapes = require('./shapes.js');

class Square extends Shapes {
  constructor(shapeColor) {
    // pass shapeColor to parent class constructor
    super(shapeColor);
  }
  render() {
    // define unique square characteristics
    let shape = "rect x=\"50\" y=\"0\" width=\"200\" height=\"200\"";

    // return completed svg string
    return `<${shape} fill="${this.shapeColor}"/>`;
  }
}

module.exports = Square;