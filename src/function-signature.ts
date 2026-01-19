// Function Signature
let userInfo01: ()=> void;
let userInfo02: (name: string)=> void;
let userInfo03: (name: string, age: number)=> void;

userInfo01 = ()=> {
    console.log("Wasim is 28 Years old!")
}
userInfo01();

userInfo02 = (name: string)=> {
    console.log(`${name} is 28 Years old!`)
}
userInfo02("Wasim Uddin");

userInfo03 = (name: string, age: number)=> {
    console.log(`${name} is ${age} Years old!`)
}
userInfo03("Wasim Uddin", 29)