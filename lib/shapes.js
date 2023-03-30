class Shapes {
    // set out shapeColor in parent class Shapes
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    }
    
    // make sure render is not called through an instance of Shapes class
    render() {
      throw new Error('Child class must implement a render() method.');
    }

  }
  
  module.exports = Shapes;