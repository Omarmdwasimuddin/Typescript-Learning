interface IUserFormatter {
    formatUser : ()=> string
}
class User implements IUserFormatter {
    constructor(private fullName: string, private age: number ){}

    formatUser = () => {
        return `name: ${this.fullName}, age: ${this.age}`;
    };
}

let user = new User("Wasim", 22);
console.log(user.formatUser());