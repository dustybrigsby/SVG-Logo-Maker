// Import shapes constructors
const Shape = require('shapes.js');

describe('Shape', () => {
    describe('circle', () => {
        it('should output string that defines a svg circle shape', () => {
            const testCircle = '<circle cx="100" cy="100" r="50" fill="green">';
            const result = new Shape("circle", "green");
            expect(result).toEqual(testCircle);
        });
    });
    describe('circle', () => {
        it('should output string that defines a svg circle shape', () => {
            const testSquare = '<rect x="0" y="0" width="100" height="100">';
            const result = new Shape("square", "green");
            expect(result).toEqual(testSquare);
        });
    });
    describe('circle', () => {
        it('should output string that defines a svg circle shape', () => {
            const testTriangle = '<polygon points="50, 0 100, 100 0, 100">';
            const result = new Shape("triangle", "green");
            expect(result).toEqual(testTriangle);
        });
    });

});