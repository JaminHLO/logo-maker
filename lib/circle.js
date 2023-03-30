const Shapes = require('./shapes.js');

class Circle extends Shapes {
    // make sure constructor takes in necessary variables
  constructor(logoName, logoColor, shapeColor) {
    // re-use logo text specific constructor from Shapes
    super(logoName, logoColor);
    this.shapeColor = shapeColor;
  }
  render() {
    // define unique circle characteristics
    let shape = "circle cx=\"150\" cy=\"100\" r=\"90\"";
    let shapeEnd = "circle";

    // return completed svg string
    return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${this.shapeColor}"></${shapeEnd}>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="55" fill="${this.logoColor}"> ${this.logoName} </text>
    </svg>`;
  }
}

module.exports = Circle;