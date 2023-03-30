const Shapes = require('./shapes.js');

class Circle extends Shapes {
  constructor(shapeColor) {
    // pass shapeColor to parent class constructor
    super(shapeColor);
  }
  render() {
    // define unique circle characteristics
    let shape = "circle cx=\"150\" cy=\"100\" r=\"90\"";

    // return completed svg string
    return `<${shape} fill="${this.shapeColor}"/>`;
  }
}

module.exports = Circle;