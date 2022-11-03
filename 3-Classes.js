import inquirer from "inquirer";

class Calculator {
    constructor() {
        this.questions = [
            {
                type: 'list',
                name: 'operation',
                message: 'Which operation do you want to perform?',
                choices: ['Addition', 'Subtraction', 'Multiplicatoin', 'Division'],
                filter(val) {
                    return val.toLowerCase();
                },
            },
            {
                type: 'number',
                name: 'num1',
                message: 'Enter number 1:',
            },


            {
                type: 'number',
                name: 'num2',
                message: 'Enter number 2:',
            },
        ];

        this.continueQuestions = [
            {
                type: 'confirm',
                name: 'continue',
                message: 'Do you want to continue?',
                default: false,
            },
        ];
    }

    calculator(answers) {
        switch (answers.operation) {
            case 'addition':
                console.log(answers.num1 + ' + ' + answers.num2 + ' = ' + (answers.num1 + answers.num2));
                break;
            case 'subtraction':
                console.log(answers.num1 + ' - ' + answers.num2 + ' = ' + (answers.num1 - answers.num2));
                break;
            case 'multiplicatoin':
                console.log(answers.num1 + ' * ' + answers.num2 + ' = ' + (answers.num1 * answers.num2));
                break;
            case 'division':
                console.log(answers.num1 + ' / ' + answers.num2 + ' = ' + (answers.num1 / answers.num2));
                break;
            default:
                break;
        }
    }

    askContinue() {
        inquirer.prompt(this.questions).then(answers => {
            this.calculator(answers);
        }).then(() => {
            inquirer.prompt(this.continueQuestions).then(answers => {
                if (answers.continue) {
                    this.askContinue();
                }
            });
        });
    }

    start() {
        console.log("Hey! Its your own calculator :)");
        this.askContinue();
    }

}

const calculator = new Calculator();
calculator.start();

