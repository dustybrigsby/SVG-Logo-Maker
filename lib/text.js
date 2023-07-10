function renderText(size, text, color) {
    const logoText = `<text x="${ size / 2 }" y="${ size / 2 }" font-size="${ size / 3 }" text-anchor="middle" fill="${ color }">${ text }</text>`;

    return logoText;
}

module.exports = renderText();