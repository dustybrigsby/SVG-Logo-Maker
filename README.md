# SVG Logo Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [License](#license)
- [Contributors](#contributors)
- [Test](#test)
- [Questions](#questions)

<a name="description"></a>

## Description

A .svg image generator that creates a simple vector logo based on a few user terminal inputs.

<a name="installation"></a>

## Installation

- NodeJS - [v16.18.0](https://nodejs.org/dist/v16.18.0/node-v16.18.0-x64.msi)
- Inquirer - [v9.6.5](https://www.npmjs.com/package/inquirer#installation)
  - Using the command line interface, enter "npm install --save inquirer@9.6.5"

For testing:

- Jest - v29.5
  - Using the command line interface, enter "npm install --save-dev jest"
  - Add the following section to package.json:

```js
{
  "scripts":{
    "test": "jest"
  }
}
```

<a name="usage"></a>

## Usage

In the Terminal, navigate to the containing directory and enter "node index.js" to run the SVG Logo Generator.

Enter answers to all of the prompts.

A .svg image file is created in the "examples" directory based on your responses.

[Example Video](https://drive.google.com/file/d/1ZRKkiyeLEUMquMcfyyrUIZvfnZa2CNT7/view?usp=sharing)

<a name="screenshot"></a>

## Screenshot

![Screenshot of running the SVG Logo Generator in the terminal.](/lib/screenshot.jpg)
![Example logo.svg file.](/examples/logo.svg)

<a name="license"></a>

## License

MIT License
See [LICENSE](/LICENSE) file in contatining directory

<a name="contributors"></a>

## Contributors

Used the references and tutorials from:

- Multiple activities from 10-OOP class lessons and files.
- [prashant_srivastava's article on validating hex color codes](https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/#)
- The "Helpful SVG Resources" section links in the 10-OOP/02-Challenge README.md file:

  - [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)

  - [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

  - [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

  - [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

  - [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)

  - [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)

- [W3 Schools SVG Tutorials](https://www.w3schools.com/graphics/svg_inhtml.asp)

<a name="test"></a>

## Test

Use Jest to run .test.js files by entering "npm test" in the terminal.

<a name="questions"></a>

## Questions?

[SVG Logo Generator GitHub Repository](https://github.com/dustybrigsby/10-OOP-Challenge)

If not found there, you can email me at:

[dustybrigsby@gmail.com](mailto:dustybrigsby@gmail.com)
