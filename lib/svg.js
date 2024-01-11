/*
 * @Author: AJ Javadi 
 * @Email: amirjavadi25@gmail.com
 * @Date: 2024-01-11 16:49:39 
 * @Last Modified by: Someone
 * @Last Modified time: 2024-01-11 16:54:32
 * @Description: file:///Users/aj/Desktop/bootcamp/Homework/8.%20Logo%20Maker/SVG_Logo_Maker/lib/svg.js
 * set up the SVG class that will render the SVG file
 */


class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }


    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
    }

    // set the text
    setText(message, color) {
        if (message.length > 3) {
            throw new Error("The message is too long...\n Please enter a message with 3 characters or less");

        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    // set the shape
    setShape(shape) {
        this.shapeElement = shape.render();
    }
}

// exports the SVG class
module.exports = SVG;
