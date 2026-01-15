// built in data types = string, number, boolean, null, undefined, void
var id; // implicit any type
var userId; // explicit number type
var firstName = "Wasim"; // explicit string type with initialization
var lastName; // explicit string type
var fullName;
var isActive = true; // explicit boolean type with initialization
// userId = "101"; // Error: Type 'string' is not assignable to type 'number'
userId = 101;
lastName = "Uddin";
console.log(firstName);
fullName = firstName.concat(" ", lastName);
console.log("User Name:", fullName);
console.log("User ID:", userId);
console.log("Is Active:", isActive);
console.log("Your Id is: ".concat(userId, ", Name: ").concat(fullName, ", Active: ").concat(isActive));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function greetUser(name) {
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Wasim");
