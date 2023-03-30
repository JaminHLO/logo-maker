const Shapes = require('./shapes.js');

class Triangle extends Shapes {
  constructor(shapeColor) {
    // pass shapeColor to parent class constructor
    super(shapeColor);
  }
  render() {
    // define unique triangle characteristics
    let shape = "polygon points=\"150, 18 244, 182 56, 182\"";

    // return completed svg string
    return `<${shape} fill="${this.shapeColor}"/>`;
  }
}

module.exports = Triangle;