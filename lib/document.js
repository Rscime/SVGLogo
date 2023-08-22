function createDocument(text, textColor, shape, shapeColor) {
    if (shape === 'circle'){
        return `
        <svg width = "300" height = "200">
    
        <circle 
        cx = "150"
        cy = "100"
        r = "100" 
        fill="${shapeColor}"/>
        
        <text 
        x ="150"
        y ="120"
        text-anchor="middle"
        font-size ="75"
        fill="${textColor}">
        ${text}
        </text>
        </svg>`;
    }
    else if (shape === 'square') {
        //square
        return `        
        <svg width = "300" height = "200">
    
        <rect 
        height="200" 
        width="200" 
        fill="${shapeColor}"/>
        
        <text 
        x ="100"
        y ="120"
        text-anchor="middle"
        font-size ="75"
        fill="${textColor}">
        ${text}
        </text>
        </svg>`;
    }
    else{
        //triangle
        return `
        <svg width = "300" height = "200">
    
        <polygon 
        points= "0, 200  150, 0  300, 200" 
        fill="${shapeColor}"/>
        
        <text 
        x ="150"
        y ="150"
        text-anchor="middle"
        font-size ="75"
        fill="${textColor}">
        ${text}
        </text>
        </svg>`;
    }
}

module.exports = { createDocument };