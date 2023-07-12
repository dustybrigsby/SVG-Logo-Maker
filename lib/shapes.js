class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color, name) {
        super(color);
        this.name = name;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${ this.color }" />`;
    };
}

class Square extends Shape {
    constructor(color, name) {
        super(color);
        this.name = name;
    }

    render() {
        return `<rect x="60" y="20" width="160" height="160" fill="${ this.color }" />`;
    };

}

class Triangle extends Shape {
    constructor(color, name) {
        super(color);
        this.name = name;
    }

    render() {
        return `<polygon points="150, 20 240, 180 60, 180" fill="${ this.color }" />`;
    };

}

module.exports = { Circle, Square, Triangle };