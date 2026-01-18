//01
//import { studentName, studentAge } from "./Student";

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
import * as Student from "./Student";

function displayStudentInfo(): void {
    console.log(`${Student.studentName}, ${Student.studentAge}`)
}

displayStudentInfo();