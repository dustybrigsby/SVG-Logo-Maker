const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');
const Text = require('./lib/text.js');
const render = require('./lib/render.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Type 1 to 3 letters to superimpose over your shape:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color for this text? (hex value or color name - full list found at https://www.w3schools.com/colors/colors_names.asp)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape for your logo?',
        choices: [ 'circle', 'square', 'triangle' ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color for this shape? (hex value or color name - full list found at https://www.w3schools.com/colors/colors_names.asp)'
    }
];

async function getInput() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log('answers:', answers);

        const data = {
            text: answers.text,
            textColor: answers.textColor,
            shape: answers.shape,
            shapeColor: answers.shapeColor
        };
        const textXml = new Text.renderText(data.text, data.textColor);
        let shapeXml;

        if (data.shape === 'circle') {
            shapeXml = new Circle(data.shapeColor, data.shape).makeCircle();
        }
        else if (data.shape === 'square') {
            shapeXml = new Square(data.shapeColor, data.shape).makeSquare();
        }
        else if (data.shape === 'triangle') {
            shapeXml = new Triangle("green", "triangle").makeTriangle();
        }
        else {
            new Error('Error, restart and select a shape.');
        }

        writeToFile(svgData);

    } catch (error) {
        console.error('getInput Error:', error);
    }
}

function writeToFile(data) {
    fs.writeFile('examples/logo.svg', data, (err) => {
        if (err) {
            console.log('Error while writing file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function init() {
    getInput();
}

init();