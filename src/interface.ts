interface IUser {
    id: number,
    name: string,
    age: number
}

let users:IUser[]=[];

let user1: IUser= {
    id: 1,
    name: "Wasim Uddin",
    age: 28
}

let user2: IUser= {
    id: 2,
    name: "Omar Labib",
    age: 29
}

users.push(user1);
users.push(user2);

//console.log(users)

const printUserInfo = (user: IUser) => {
    console.log(`userid: ${user.id}, username: ${user.name}, userage: ${user.age}`)
}

users.forEach(user => printUserInfo(user))