function Text() { };

Text.prototype.renderText = (text, color) => {
    return `<text x="150" y="140" font-size="120" text-anchor="middle" fill="${ color }">${ text }</text>`;
};

module.exports = Text;