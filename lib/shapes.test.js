const CLI = require('./cli.js');

describe('TEST', () =>{
    
    describe('Testing triangle', () =>{
    it('should return a blue triangle', () => {
        const triangle = new CLI();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="0, 200  150, 0  300, 200" fill="blue" />');
    });
});
    describe('Testing circle', () =>{
    it('should return a red circle', () => {
        const circle = new CLI();
        circle.setColor("red");
        expect(circle.render()).toEqual('<circle cx = "150" cy = "100" r = "100" fill="red"/>');
    });
});
    describe('Testing square', () =>{
    it('should return a green square', () => {
        const square = new CLI();
        square.setColor("red");
        expect(square.render()).toEqual('<rect height="200"  width="200"  fill="green"/>');
    });
});
})