const Text = require('../lib/text.js');

describe('renderText', () => {
    it('should output string that defines svg green text', () => {
        const testText = '<text x="150" y="100" font-size="120" text-anchor="middle" fill="green">DEW</text>';
        const result = new Text;
        expect(result.renderText("DEW", "green")).toEqual(testText);
    });
});