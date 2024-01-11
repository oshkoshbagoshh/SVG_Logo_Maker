/*
 * @Author: AJ Javadi 
 * @Email: amirjavadi25@gmail.com
 * @Date: 2024-01-11 16:55:14 
 * @Last Modified by: Someone
 * @Last Modified time: 2024-01-11 17:07:03
 * @Description: file:///Users/aj/Desktop/bootcamp/Homework/8.%20Logo%20Maker/SVG_Logo_Maker/lib/cli.js
 * 
 * set up the CLI class that will run the program
 */

const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Square, Triangle } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer.createPromptModule([
            {
                name: "text",
                type: "input",
                message: "Enter text for the logo. (3 characters or less)",
                validate: (text) =>
                    text.length <= 3 || "The message is too long...\n Please enter a message with 3 characters or less",
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter a color for the text:",
                default: "black",
            },
            {
                name: "shapeType",
                type: "list",
                message: "Choose a shape:",
                choices: ["Circle", "Square", "Triangle"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a color for the shape:",
            },
        ])
            .then(({ text, textColor, shapeType, shapeColor }) => {
                let shape;
                switch (shapeType) {
                    case "Circle":
                        shape = new Circle();
                        break;
                    case "Square":
                        shape = new Square();
                        break;
                    case "Triangle":
                        shape = new Triangle();
                        break;
                    default:
                        break;
                }
                shape.setColor(shapeColor);
                const svg = new SVG();
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile("logo.svg", svg.render());
            })
            .then(() => console.log("Logo created!"))
            .catch((error) => console.error(error));
    }
}


module.exports = CLI;

