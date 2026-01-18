"use strict";
//01
//import { studentName, studentAge } from "./Student";
Object.defineProperty(exports, "__esModule", { value: true });
//function displayStudentInfo(): void {
//console.log(`${studentName}, ${studentAge}`)
//}
//displayStudentInfo();
//02
//import { displayStudentInfo } from "./Student";
//displayStudentInfo();
//03
//import { studentName as name, studentAge as age } from "./Student";
//function displayStudentInfo(): void {
//console.log(`${name}, ${age}`)
//}
//displayStudentInfo();
//04
var Student = require("./Student");
function displayStudentInfo() {
    console.log("".concat(Student.studentName, ", ").concat(Student.studentAge));
}
displayStudentInfo();
