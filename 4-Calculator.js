import inquirer from "inquirer";

function calculator(answers) {
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

console.log("Hey! Its your own calculator :)")

const questions = [
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


const continueQuestions = [
    {
        type: 'confirm',
        name: 'continue',
        message: 'Do you want to continue?',
        default: false,
    },
];

function askContinue() {
    inquirer.prompt(questions).then(answers => {
        calculator(answers);
    }).then(() => {
        inquirer.prompt(continueQuestions).then(answers => {
            if (answers.continue) {
                askContinue();
            }
        })
    })
}

askContinue();