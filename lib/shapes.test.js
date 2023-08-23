
const CLI = require('./cli.js');

describe('TEST', () =>{
    
    describe('Testing triangle', () =>{
    it('should return a blue triangle', () => {
        const sample = new CLI();
        sample.text = 'abc';
        sample.textColor = 'black';
        sample.shape = 'triangle';
        sample.shapeColor = 'blue';
        const example = `
        <svg width = "300" height = "200">
    
        <polygon 
        points= "0, 200  150, 0  300, 200" 
        fill="blue"/>
        
        <text 
        x ="150"
        y ="150"
        text-anchor="middle"
        font-size ="75"
        fill="black">
        abc
        </text>
        </svg>`.trim();
        expect(sample.render().trim()).toEqual(example);
    });
});

    describe('Testing circle', () =>{
    it('should return a red circle', () => {
        const sample = new CLI();
        sample.text = 'abc';
        sample.textColor = 'black';
        sample.shape = 'circle';
        sample.shapeColor = 'red';
        const example = `
        <svg width = "300" height = "200">
    
        <circle 
        cx = "150"
        cy = "100"
        r = "100" 
        fill="red"/>
        
        <text 
        x ="150"
        y ="120"
        text-anchor="middle"
        font-size ="75"
        fill="black">
        abc
        </text>
        </svg>`.trim();
        expect(sample.render().trim()).toEqual(example);
    });
});
    describe('Testing square', () =>{
    it('should return a green square', () => {
        const sample = new CLI();
        sample.text = 'abc';
        sample.textColor = 'black';
        sample.shape = 'square';
        sample.shapeColor = 'green';
        const example =`        
        <svg width = "300" height = "200">
    
        <rect 
        height="200" 
        width="200" 
        fill="green"/>
        
        <text 
        x ="100"
        y ="120"
        text-anchor="middle"
        font-size ="75"
        fill="black">
        abc
        </text>
        </svg>`.trim();
        expect(sample.render().trim()).toEqual(example);
    });
});
})