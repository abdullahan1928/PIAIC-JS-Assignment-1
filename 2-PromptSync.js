import PromptSync from "prompt-sync";

const prompt = PromptSync();

const num1 = prompt('Enter number 1: ');
const num2 = prompt('Enter number 2: ');

console.log("The addition is ", parseInt(num1) + parseInt(num2));
