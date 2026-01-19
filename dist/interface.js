"use strict";
let users = [];
let user1 = {
    id: 1,
    name: "Wasim Uddin",
    age: 28
};
let user2 = {
    id: 2,
    name: "Omar Labib",
    age: 29
};
users.push(user1);
users.push(user2);
//console.log(users)
const printUserInfo = (user) => {
    console.log(`userid: ${user.id}, username: ${user.name}, userage: ${user.age}`);
};
users.forEach(user => printUserInfo(user));
//# sourceMappingURL=interface.js.map