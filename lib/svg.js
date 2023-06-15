// create a class for SVG with properties  for text, textcolor, and shape 
// then add methods to set the text, render it, and set the shapecolor

class SVG {
    constructor() {
        this.elements = []; // initialize an array 
    }

    // set text method. Make sure the max length is less than 3 char
    setText(text,textcolor) {
        if (text.length > 3) {
            throw new Error ("Please enter only up to three characters.") ;
        }
        const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`;
        this.elements.push(textElement); // adds text to the elements array    

    } 
    // render method 
    render () {

        const svgContent = this.elements.join(''); // add svgContent to the elements array 
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;

    }
    // setShape method 

    setShape (shape){
        const shapeElement = shape.render();
        this.elements.push(shapeElement); // pushes shape to the elements array 

    }

}

// export 
export {SVG};