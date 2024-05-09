#!/user/bin/env node
import inquirer from "inquirer";
let myBalance = 500000;
const myPin = 1214;
let pinAns = await inquirer.prompt([
    { message: 'Enter your pin', name: 'pin', type: 'number',
    }
]);
if (pinAns.pin === myPin) {
    console.log('Correct pin');
    let Account = await inquirer.prompt([
        { message: 'Select one of the option', name: 'Option', type: 'list',
            choices: ['Cash Withdrawal', 'Fast Cash', 'Check Balance']
        }
    ]);
    if (Account.Option === 'Fast Cash') {
        let withdraw = await inquirer.prompt([
            { message: 'Enter amount', name: 'amount', type: 'list',
                choices: ['5000', '10000', '30000']
            }
        ]);
        let deduction = withdraw.amount;
        myBalance -= deduction;
        console.log(`Amount deducted: ${deduction}. \nYour remaining Balance: ${myBalance} PKR`);
    }
    if (Account.Option === 'Check Balance') {
        console.log(`Your current balance: ${myBalance} PKR`);
    }
    if (Account.Option === 'Cash Withdrawal') {
        let yourAmount = await inquirer.prompt([
            { message: 'Enter your amount.', type: 'number', name: 'money' }
        ]);
        if (yourAmount.money <= myBalance) {
            let AmountToWithdraw = yourAmount.money;
            console.log('Amount deducted: ' + AmountToWithdraw);
            myBalance -= AmountToWithdraw;
            console.log(`Your remaining balance is:`, myBalance);
        }
        else {
            console.log("Insufficiant Balance");
        }
    }
}
else {
    console.log("Wrong pin number.");
}
