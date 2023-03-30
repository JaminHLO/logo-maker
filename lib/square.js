const Shapes = require('./shapes.js');

class Square extends Shapes {
  // make sure constructor takes in necessary variables
  constructor(logoName, logoColor, shapeColor) {
    // re-use logo text specific constructor from Shapes
    super(logoName, logoColor);
    this.shapeColor = shapeColor;
  }
  render() {
    // define unique square characteristics
    let shape = "rect x=\"50\" y=\"0\" width=\"200\" height=\"200\"";
    let shapeEnd = "rect";

    // return completed svg string
    return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${this.shapeColor}"></${shapeEnd}>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="55" fill="${this.logoColor}"> ${this.logoName} </text>
    </svg>`;
  }
}

module.exports = Square;