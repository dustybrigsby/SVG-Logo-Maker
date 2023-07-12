function renderSvg(shape, text) {
    const svgLogo = `<svg version="1.1"
    width="300" height"200"
    smlns="http://www.w3.org/2000/svg">
    
    ${ shape }
    
    ${ text }
    
    </svg>`;

    return svgLogo;
}

module.exports = renderSvg();