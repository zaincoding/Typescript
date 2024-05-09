#! /bin/user/env-node
import inquirer from "inquirer";
async function result() {
    const randomNUmber = Math.round((Math.random()) * 5) + 1;
    const answer = await inquirer.prompt([
        {
            message: "Enter number", type: "number", name: "Guess"
        }
    ]);
    const { Guess } = answer;
    if (Guess === randomNUmber) {
        console.log('Congratulation! You guess the correct number.');
    }
    else {
        console.log('You guess the wrong number.');
        await result();
    }
}
result();
