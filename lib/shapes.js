const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./Circle');

class SVG{
    constructor(){
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
        this.combo = '';
    }

    run(){
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'What text would you like in your logo (3 character MAXimum)?'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your logo text (please enter a keyword or a hex number)?'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape would you like your logo?',
                    choices: ['circle', 'square', 'triangle']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like you logos shape to be (please enter a keyword or a hex number)?'
                }
            ])
            .then(({text, textColor, shape, shapeColor}) =>{
                this.title = `${text}`;
                this.textColor = `${textColor}`;
                this.shape  = `${shape}`;
                this.shapeColor = `${shapeColor}`;
            } 
                )
        }

}