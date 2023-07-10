function renderSvg(size, shape, text) {
    const svgLogo = `<svg version="1.1"
    width="${ size }" height"${ size }"
    smlns="http://www.w3.org/2000/svg">
    
    ${ shape }
    
    ${ text }
    
    </svg>`;

    return svgLogo;
}

module.exports = renderSvg();