// create a class for Shape 
class Shape {
    constructor() {
      // let shapecolor = '';
      this.shapecolor = ''; // initialize the shapecolor

    } //function to set the shape color 
    setColor(shapecolor) {
        this.shapecolor = shapecolor;
    }

}

// create classes that are children of Shape for Circle, Square, and Triangle using "extend"

//circle 
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />`;
    }
}

//Square 
class Square extends Shape {
    render () {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapecolor}" />`;
  }
}

  // Triangle 
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`;
    }
  }

    





//export 
// module.exports = {Circle, Square, Triangle};
module.exports = Shape;
module.exports = { Circle, Square, Triangle };