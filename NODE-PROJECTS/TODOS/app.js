import inquirer from "inquirer";
//import Choices from "inquirer/lib/objects/choices.js";
let todos = [];
let condition = true;
async function main() {
    while (condition) {
        let Tasks = await inquirer.prompt([
            { message: 'Seletc one of the option.', type: 'list', name: 'select',
                choices: ['Add', 'Delete', 'Update', 'View', 'Exite']
            }
        ]);
        if (Tasks.select === 'Add') {
            let addTask = await inquirer.prompt([{
                    message: 'Enter your task.', type: 'input', name: 'addText'
                }]);
            if (addTask.addText && Tasks.select !== undefined) {
                todos.push(addTask.addText);
            }
        }
        if (Tasks.select === 'View') {
            todos.forEach((key, value) => {
                console.log(`${value + 1}: ${key}`);
            });
        }
        if (Tasks.select === 'Delete') {
            let options = await inquirer.prompt({
                message: 'Select one of the option', type: 'list', name: 'opt',
                choices: ['Number Input', 'Text Input']
            });
            if (options.opt === 'Number Input') {
                let deleteTask = await inquirer.prompt({
                    message: 'Enter list number', type: 'input', name: 'delete'
                });
                todos.splice(deleteTask.delete - 1, 1);
            }
            if (options.opt === 'Text Input') {
                let deleteTask = await inquirer.prompt({
                    message: 'Enter text value', type: 'input', name: 'delete'
                });
                let deleteVlue = todos.indexOf(deleteTask.delete);
                todos.splice(deleteVlue, 1);
            }
        }
        if (Tasks.select === 'Update') {
            let upDateTask = await inquirer.prompt([
                {
                    message: `Enter list number`, type: "number", name: `select`
                },
                {
                    message: 'Enter new text', type: "input", name: "newValue"
                }
            ]);
            let intValue = upDateTask.select;
            todos[intValue - 1] = upDateTask.newValue;
        }
        if (Tasks.select === 'Exite') {
            condition = false;
        }
    }
}
main();
