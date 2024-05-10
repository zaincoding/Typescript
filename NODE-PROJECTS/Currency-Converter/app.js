import inquirer from "inquirer";
let currency = {
    USD: 1, //Base currency.
    GBP: 0.80,
    EUR: 0.93,
    SAR: 3.75,
    AED: 3.67,
    INR: 83.45,
    PKR: 280
};
let currencyConverter = await inquirer.prompt([
    {
        message: "Select your currency.", type: 'list', name: 'from',
        choices: ['USD', 'GBP', 'EUR', 'SAR', 'AED', 'INR', 'PKR']
    },
    {
        message: "Convert to", type: 'list', name: 'to',
        choices: ['USD', 'GBP', 'EUR', 'SAR', 'AED', 'INR', 'PKR']
    },
    {
        message: "Enter the amount", name: 'amount', type: 'number'
    }
]);
let fromAmount = currency[currencyConverter.from];
let toAmount = currency[currencyConverter.to];
let Amount = currencyConverter.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = Math.round((baseAmount * toAmount) * 100) / 100;
console.log(convertedAmount);
