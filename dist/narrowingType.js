"use strict";
/* 01
const todos = ["todo1","todo2"];

function printTodos(todos:string[]) {
    todos.map((todo)=>console.log(todo))
}
printTodos(todos)
*/
/* 02
const todos = ["todo1","todo2"];

function printTodos(todos:string[] | string | number) {
    if(typeof todos === "object"){
        todos.map((todo)=>console.log(todo))
    }
    else if (typeof todos === "string"){
        console.log(todos)
    }else if (typeof todos === "number"){
        console.log(todos)
    }
}
printTodos(todos);
printTodos("todo3");
printTodos(101);
*/
const todos = ["todo1", "todo2"];
function printTodos(todos) {
    if (todos) {
        todos.map((todo) => console.log(todo));
    }
    else {
        console.log("no todos");
    }
}
printTodos(todos);
printTodos(null);
//example of typeof 
let firstName;
let lastName;
lastName = "123";
//# sourceMappingURL=narrowingType.js.map