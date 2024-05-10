import inquirer from "inquirer";
let wordCounter = await inquirer.prompt([
    {
        message: "Enter your sentence", type: "input", name: "sentence",
        validate: function (input) {
            if (/^\d+$/.test(input)) {
                return "Don't enter only digits.";
            }
            return true;
        }
    }
]);
if (wordCounter.sentence) {
    let words = wordCounter.sentence.trim().split(' ');
    if (words.length < 2) {
        console.log("The total word in this sentence is:", words.length);
    }
    else {
        console.log("The total word in this sentence are:", words.length);
    }
}
