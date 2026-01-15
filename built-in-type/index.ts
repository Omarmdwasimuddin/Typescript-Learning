// built in data types = string, number, boolean, null, undefined, void

let id; // implicit any type
let userId: number; // explicit number type
let firstName: string = "Wasim"; // explicit string type with initialization
let lastName: string; // explicit string type
let fullName: string;
let isActive: boolean = true; // explicit boolean type with initialization

// userId = "101"; // Error: Type 'string' is not assignable to type 'number'
userId = 101; 
lastName = "Uddin";

console.log(firstName);

fullName = firstName.concat(" ", lastName);
console.log("User Name:", fullName);

console.log("User ID:", userId);
console.log("Is Active:", isActive);
console.log(`Your Id is: ${userId}, Name: ${fullName}, Active: ${isActive}`);

console.log(fullName.split(" "))
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

function greetUser(name:string):void {
    console.log(`Hello, ${name}!`);
}

greetUser("Wasim")