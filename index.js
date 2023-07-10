const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const text = require('./lib/text.js');
const render = require('./lib/render.js');
const Color = require('./lib/colors.js');

const questions = [
    {
        type: 'input',
        name: 'size',
        message: 'What size for your logo? (square, in pixels up to 500px. default: 100px)',
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
    },
    {
        type: 'input',
        name: 'text',
        message: 'Type 1 to 3 letters to superimpose over your shape:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color for this text? (hex value or color name - full list found at https://www.w3schools.com/colors/colors_names.asp)'
    }
];

async function getInput() {
    try {
        const answers = await inquirer.prompt(questions);

        const data = {
            size: answers.size,
            shape: answers.shape,
            shapeColor: answers.shapeColor,
            text: answers.text,
            textColor: answers.textColor
        };

        if (!data.size) {
            data.size = 100;
        }
        console.log('data:', data);

        const shapeString = new Shape(data.shape, data.shapeColor).makeShape();

        const fileName = 'logo.svg';

        writeToFile(fileName, shapeString);

    } catch (error) {
        console.error('Error:', error);
    }
}

async function writeToFile(fileName, data, increment = 0) {
    const name = `${ path.basename(filename, path.extname(filename)) }${ increment || "" }${ path.extname(filename) }`;
    return await fs.writeFile(name, data, { encoding: 'utf8', flag: 'wx' })
        .catch(async ex => {
            if (ex.code === "EEXIST") return await writeFile(filename, data, increment += 1);
            throw ex;
        }) || name;
}

function init() {
    getInput();
}

init();