// Import shapes constructors
const { Circle, Square, Triangle } = require('../lib/shapes.js');

describe('Shape', () => {
    describe('Circle', () => {
        it('should output string that defines a svg green circle shape', () => {
            const testCircle = '<circle cx="150" cy="100" r="80" fill="green" />';
            const result = new Circle("green", "circle").makeCircle();
            expect(result).toEqual(testCircle);
        });
    });
    describe('Square', () => {
        it('should output string that defines a svg green square shape', () => {
            const testSquare = '<rect x="60" y="20" width="160" height="160" fill="green" />';
            const result = new Square("green", "square").makeSquare();
            expect(result).toEqual(testSquare);
        });
    });
    describe('Triangle', () => {
        it('should output string that defines a svg green triangle shape', () => {
            const testTriangle = '<polygon points="150, 20 240, 180 60, 180" fill="green" />';
            const result = new Triangle("green", "triangle").makeTriangle();
            expect(result).toEqual(testTriangle);
        });
    });

});