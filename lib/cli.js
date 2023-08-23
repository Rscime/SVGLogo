
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI{
    constructor(){
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }

    render() {
        const file = createDocument(this.text, this.textColor, this.shape, this.shapeColor);
        return writeFile('logo.svg', file);
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
                this.text = text;
                this.textColor = textColor;
                this.shape  = shape;
                this.shapeColor = shapeColor;
            })
            .then(() => {
                return this.render();
            })
            .then(() => {
                console.log('Your logo is complete!')
            })
            .catch((err) => {
                console.log(err);
                console.log('There was an error creating logo.svg');
            })
        }
}

module.exports = CLI;