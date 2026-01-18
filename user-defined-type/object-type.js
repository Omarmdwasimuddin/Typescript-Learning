//let user1: {userName:string, userId:number};
//user1 = {userName:"Wasim", userId:101};
//console.log(user1)
//let user2: {userName:string, userId?:number}; //userId optional
//user2 = {userName:"Wasim"};
//console.log(user2)
//let users: object;
//users = {userName: "Wasim", userId: 101}
//let user: object[];
//user = [{userName:"Wasim"},{userId:102},{age:29}];
//console.log(user)
var users;
users = [];
var user01;
user01 = { userName: "Wasim", userId: 101 };
users.push(user01);
var user02;
user02 = { userName: "Omar", userId: 102 };
users.push(user02);
//console.log(users)
for (var key in users) {
    //console.log(users)
    console.log(users[key]);
}
