//let userNames: ['Wasim','Rafiq','Kader'];
//let userNames: string[];
let userNames: Array<string>;

userNames = ['Wasim','Rafiq','Kader','Akram'];

console.log(userNames[2])
userNames.sort();
console.log(userNames);

let multipleTypes: (string | number) [];

multipleTypes = ['Wasim', 29];

console.log(multipleTypes[1])