type User = {userName:string, userId:number}

let users: User[] = []

let user01: User;
user01 = {userName:"Wasim", userId:101};
users.push(user01)

let user02: User;
user02 = {userName:"Omar", userId:102};
users.push(user02)

let user03: User;
user03 = {userName:"Labib", userId:103};
users.push(user03)

console.log(users)

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType:RequestType) {
    console.log(requestType)
}

requestHandler("GET")