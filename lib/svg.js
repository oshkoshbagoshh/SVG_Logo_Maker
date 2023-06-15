class SVG {
    constructor() {
      this.elements = [];
    }
  
    setText(text, textcolor) {
      if (text.length > 3) {
        throw new Error("Text must not exceed 3 characters.");
      }
      let textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
      this.elements.push(textElement);
      console.log(this.elements) ;
    }
  
    render() {
      const svgContent = this.elements.join('');
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;
    }
  
    setShape(shape) {
      const shapeElement = shape.render();
      this.elements.push(shapeElement);
    }
  }
  
  module.exports = {SVG};
  