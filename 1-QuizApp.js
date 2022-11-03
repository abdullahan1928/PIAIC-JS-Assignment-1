import PromptSync from "prompt-sync";

const prompt = PromptSync();

class Question {
    constructor(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    displayQuestion() {
        console.log(this.question);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + 1 + ': ' + this.answers[i]);
        }
    }

    checkAnswer(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)');
        }
    }
}



let q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'], 1);

let q2 = new Question('What is the name of this course\'s teacher?',
    ['Zia', 'Abdullah', 'Ainak Wala Jin'], 1);

let q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'], 3);

let questions = [q1, q2, q3];

let n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

let answer = parseInt(prompt('Please select the correct answer: '));
questions[n].checkAnswer(answer);

