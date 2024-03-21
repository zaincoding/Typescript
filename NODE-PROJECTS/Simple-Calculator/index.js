#! /user/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Enter the first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (answer.operator === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Select valid operator.");
}
