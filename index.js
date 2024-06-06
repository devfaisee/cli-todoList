#! usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: " what do u wanna add in your todos",
        },
        {
            name: "addmore",
            type: "confirm",
            message: " do u really want to add more todos",
            default: "false",
        },
        {
            name: "remove task",
            type: "checkbox",
            message: "select tasks u want to remove",
            choices: "todos",
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
//  Crud home work make it advanced like data saving and getting that again what we alrreaady saved and
// create remove update add tasks 
