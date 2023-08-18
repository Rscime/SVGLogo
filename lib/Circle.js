function createDocument(text, textColor, shape, shapeColor) {
    return `<svg
    width = "300" height = "200"
    viewbox = "0 0 400 400">

    <circle 
    cx ="50%" 
    cy="50%" 
    height="100%" 
    width="100%" 
    fill="${shapeColor}/>
    
    <text 
    x ="50%"
    y ="50%"
    text-anchor="middle"
    font-size ="75"
    fill="${textColor}>
    ${text}
    </text>
    </svg>`;
}

module.exports = { createDocument };