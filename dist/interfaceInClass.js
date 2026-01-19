"use strict";
class User {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
        this.formatUser = () => {
            return `name: ${this.fullName}, age: ${this.age}`;
        };
    }
}
let user = new User("Wasim", 22);
console.log(user.formatUser());
//# sourceMappingURL=interfaceInClass.js.map