class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    makeShape() {
        if (this.name === 'circle') {
            return `<circle cx="100" cy="100" r="50" fill="${ this.color }"/>`;
        }
        else if (this.name === 'square') {
            return `<rect x="0" y="0" width="100" height="100" fill="${ this.color }"/>`;
        }
        else if (this.name === 'triangle') {
            return `<polygon points="50, 0 100, 100 0, 100 fill="${ this.color }"/>`;
        }
    };
}

module.exports = Shape;