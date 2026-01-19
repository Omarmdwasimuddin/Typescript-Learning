interface IUserFormatter {
    formatUser: () => string;
}
declare class User implements IUserFormatter {
    private fullName;
    private age;
    constructor(fullName: string, age: number);
    formatUser: () => string;
}
declare let user: User;
//# sourceMappingURL=interfaceInClass.d.ts.map