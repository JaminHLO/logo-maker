class Shapes {
    constructor(logoName, logoColor) {
      this.logoName = logoName;
      this.logoColor = logoColor;
    }
    
    // make sure render is not called through an instance of Shapes class
    render() {
      throw new Error('Child class must implement a render() method.');
    }

  }
  
  module.exports = Shapes;