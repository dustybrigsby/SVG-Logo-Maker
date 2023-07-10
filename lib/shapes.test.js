// Import shapes constructors
const Shape = require('../lib/shapes.js');

describe('Shape', () => {
    describe('circle', () => {
        it('should output string that defines a svg circle shape', () => {
            const testCircle = '<circle cx="100" cy="100" r="50" fill="green">';
            const result = new Shape("circle", "green").makeShape();
            expect(result).toEqual(testCircle);
        });
    });
    describe('square', () => {
        it('should output string that defines a svg circle shape', () => {
            const testSquare = '<rect x="0" y="0" width="100" height="100" fill="green">';
            const result = new Shape("square", "green").makeShape();
            expect(result).toEqual(testSquare);
        });
    });
    describe('triangle', () => {
        it('should output string that defines a svg circle shape', () => {
            const testTriangle = '<polygon points="50, 0 100, 100 0, 100 fill="green">';
            const result = new Shape("triangle", "green").makeShape();
            expect(result).toEqual(testTriangle);
        });
    });

});