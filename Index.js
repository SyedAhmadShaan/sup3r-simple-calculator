#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to to perform action",
        type: "list",
        name: "operator",
        choices: [
            "addition",
            "substraction",
            "multiplication",
            "division",
            "exponentiation",
            "modulus",
            "sqaure root",
            "logarithm",
        ],
    },
]);
console.log(answer);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "exponentiation") {
    console.log(Math.pow(answer.firstNumber, answer.secondNumber));
}
else if (answer.operator === "modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "sqaure root") {
    console.log(Math.sqrt(answer.firstNumber));
}
else if (answer.operator === "logarithm") {
    console.log(Math.log(answer.firstNumber));
}
else {
    console.log("Please select valid operator");
}
