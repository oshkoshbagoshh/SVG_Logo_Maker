/*
 * @Author: AJ Javadi 
 * @Email: amirjavadi25@gmail.com
 * @Date: 2024-01-11 16:45:59 
 * @Last Modified by: Someone
 * @Last Modified time: 2024-01-11 16:49:14
 * @Description: file:///Users/aj/Desktop/bootcamp/Homework/8.%20Logo%20Maker/SVG_Logo_Maker/lib/shapes.js
 *  set up the base class for the shapes
 */


class Shape {
    constructor() {
        this.color = "";
    }
    // set the color
    setColor(color) {
        this.color = color;
    }
}

// Circle class

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fille="${this.color}" />`;

    }
}

// Triange class

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Square class
class Square extends Shape {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }

// exports the classes

module.exports = { Circle, Triangle, Square };
