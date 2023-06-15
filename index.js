// import our required moduels
const inquirer = require("inquirer");
const fs = require("fs");
const svg = require("./lib/svg"); //imports our svg.js file
const {Circle, Square, Triange }  = require("./lib/shapes");// import from shapes.js 




/****************
 *  psueudocode
 *  use inquirer to set up input questions to the user for logo text (no more than 3 char), textcolor, shape, and shapecolor
 *  use a promise 
 * use a switch statement based on shape to create the shape 
 * set the shape color based on input
 * set the text based on input
 * set the text color based on input
 * write to the file using fs to create the 'logo.svg' file 
 * use jest to run the test cases
 * use validation to keep the elements aligned with the restrictions in the README 
 * 
 * 
 * 
 * misc:
 * const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
 * 
 * 
 */


// use inquirer to set up an array of objects called questions
const questions = [
    {
        type: 'string',
        message: "Please enter the logo text...",
        name: 'logotext',
    },
    {
        type: 'string',
        message: 'Please enter the text color...',
        name:'textcolor',
    },
    {
        type:'list',
        message: 'Please select a logo shape...',
        name: 'shape',
    },
    {
        type:'string',
        message:'Please enter a logo color...',
        name:'shapecolor',
    }
];

//use inquirer to prompt the questions 
inquirer.prompt(questions).then(({logotext,textcolor,shape,shapecolor}) =>{
let shapetype ='';

    switch (shape) {
        case 'circle':
            shapetype = new Circle();
            break;
        case 'square':
            shapetype = new Square();
            break;
        case 'triangle':
            shapetype = new Triange();
            break;
    }


const svg = new SVG();
svg.setText(text,textcolor); // set the text and text color 
svg.setShape(shapetype); // set the shape based on shapetype 

//write to the file using fs 
fs.writeFile('logo.svg',svg.render(),(err) => {
    if(err) {
        console.log('...error!');
    } else {
        console.log('...success!');
    }

});

}

)