var users = [];
var user01;
user01 = { userName: "Wasim", userId: 101 };
users.push(user01);
var user02;
user02 = { userName: "Omar", userId: 102 };
users.push(user02);
var user03;
user03 = { userName: "Labib", userId: 103 };
users.push(user03);
console.log(users);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
