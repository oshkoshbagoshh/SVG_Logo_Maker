// Import required modules
const inquirer = require("inquirer");
const fs = require("fs");
const {SVG} = require("./lib/svg");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Define the array of questions using inquirer
const questions = [
  {
    type: 'input',
    message: "Please enter the logo text...",
    name: 'text',
  },
  {
    type: 'input',
    message: 'Please enter the text color...',
    name: 'textcolor',
  },
  {
    type: 'list',
    message: 'Please select a logo shape...',
    name: 'shape',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    type: 'input',
    message: 'Please enter a logo color...',
    name: 'shapecolor',
  }
];

// Prompt the questions using inquirer
inquirer.prompt(questions).then(function({ text, textcolor, shape, shapecolor }) {
  let shapetype = null;

  switch (shape) {
    case 'circle':
      shapetype = new Circle(shapecolor);
      break;
    case 'square':
      shapetype = new Square(shapecolor);
      break;
    case 'triangle':
      shapetype = new Triangle(shapecolor);
      break;
  }

  const svg = new SVG();
  svg.setText(text, textcolor);
  svg.setShape(shapetype);

  fs.writeFile('logo.svg', svg.render(), function(err) {
    if (err) {
      console.log('Error writing file!');
    } else {
      console.log('File saved successfully as logo.svg!');
    }
  });
});
