# 📘 TypeScript Learning — Tutorials

এই রিপোজিটরিটি **TypeScript শেখার জন্য বেসিক সেটআপ ও প্রয়োজনীয় কমান্ডগুলো** স্টেপ-বাই-স্টেপ দেখানোর জন্য তৈরি করা হয়েছে।

---

## ⚙️ TypeScript Installation Process

### 🔹 Step 01: Initialize Project

```bash
npm init -y
```

➡️ `package.json` ফাইল তৈরি হবে

---

### 🔹 Step 02: Install TypeScript

```bash
npm install typescript --save-dev
```

✅ **Best Practice**
অথবা (Global install – optional)

```bash
npm install -g typescript
```

---

### 🔹 Step 03: Compile TypeScript File

যদি `--save-dev` দিয়ে install করা হয়, তাহলে compile করতে হবে:

```bash
npx tsc anyfile.ts
```

Watch mode এ compile করতে:

```bash
npx tsc anyfile.ts --watch
```

---

### 🔹 Step 04: Run Compiled JavaScript File

```bash
node anyfile.js
```

---

## 🛠️ Create `tsconfig.json`

TypeScript configuration file তৈরি করতে:

```bash
npx tsc --init
```

---

## ⌨️ Useful Shortcut Keys

| কাজ                      | Shortcut   |
| ------------------------ | ---------- |
| File এর ভিতরে খুঁজতে     | `Ctrl + F` |
| Watch mode বন্ধ করতে     | `Ctrl + C` |
| Parent directory তে যেতে | `cd ..`    |

---

## ✅ Check Environment Versions

Node.js version:

```bash
node --version
```

NPM version:

```bash
npm --version
```

TypeScript version:

```bash
tsc --version
```

---

## 📚 Class 01: Your First TypeScript Program

### 📁 Folder Structure
প্রথমে একটি নতুন ফোল্ডার তৈরি করুন যেখানে আমরা TypeScript প্রোগ্রাম লিখব।

![File Folder Structure](/img/img05.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`index.ts`)
```typescript
let userName = "Wasim";
let age = 28;
console.log("Hello, " + userName + "! You are " + age + " years old.");

function addNumber(num1: number, num2: number) {
    console.log(num1 * num2);
}

addNumber(5, 10);
```

2. **TypeScript কম্পাইল করুন**
```bash
npx tsc index.ts
```
এই কমান্ডটি `index.ts` ফাইলটি কম্পাইল করে `index.js` JavaScript ফাইল তৈরি করবে।

![Terminal Screenshot](/img/img04.png)

3. **JavaScript ফাইল রান করুন**
```bash
node index.js
```
আউটপুট: `Hello, Wasim!`

### 📊 Workflow Summary
```
index.ts → (tsc index.ts) → index.js → (node index.js) → Output
```

### ⚡ Quick Notes
- TypeScript (.ts) ফাইল সরাসরি Node.js এ রান করা যায় না
- অবশ্যই প্রথমে JavaScript (.js) ফাইলে কম্পাইল করতে হবে
- `--watch` ফ্ল্যাগ ব্যবহার করলে ফাইল পরিবর্তন স্বয়ংক্রিয়ভাবে কম্পাইল হবে
---

## 📚 Class 02: built-in-type

### 📁 Folder Structure
প্রথমে একটি নতুন ফোল্ডার তৈরি করুন যেখানে আমরা TypeScript প্রোগ্রাম লিখব।

![File Folder Structure](/img/img06.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`index.ts`)
```typescript
// built in data types = string, number, boolean, null, undefined, void

let id; // implicit any type
let userId: number; // explicit number type
let firstName: string = "Wasim"; // explicit string type with initialization
let lastName: string; // explicit string type
let fullName: string;
let isActive: boolean = true; // explicit boolean type with initialization

// userId = "101"; // Error: Type 'string' is not assignable to type 'number'
userId = 101; 
lastName = "Uddin";

console.log(firstName);

fullName = firstName.concat(" ", lastName);
console.log("User Name:", fullName);

console.log("User ID:", userId);
console.log("Is Active:", isActive);
console.log(`Your Id is: ${userId}, Name: ${fullName}, Active: ${isActive}`);

console.log(fullName.split(" "))
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

function greetUser(name:string):void {
    console.log(`Hello, ${name}!`);
}

greetUser("Wasim")
```

আউটপুট: ![File Folder Structure](/img/img07.png)
---
## 📚 Class 03: union type

### 📁 Folder Structure

![File Folder Structure](/img/img08.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`union-type.ts`)
```typescript
let userId: (string | number | boolean);

userId = "101";
userId = 101;
userId = true;

function displayUserInfo(userId: string | number | boolean ) {
    console.log(userId)
}

displayUserInfo(101);
displayUserInfo("101")
displayUserInfo(true)
```

আউটপুট: ![File Folder Structure](/img/img09.png)
---
## 📚 Class 04: array type

### 📁 Folder Structure

![File Folder Structure](/img/img10.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`array-type.ts`)
```typescript
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
```
---
## 📚 Class 05: Tuple type

### 📁 Folder Structure

![File Folder Structure](/img/img11.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`tuple-type.ts`)
```typescript
// mixed data - key, value
let user: [number, string];
user = [101, 'Bangla']
//let user: [number, string] = [101,'Bangla'];

user.push(102,'English')
console.log(user)
console.log(user[1])
```
---
## 📚 Class 06: Enum type

### 📁 Folder Structure

![File Folder Structure](/img/img12.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`enum-type.ts`)
```typescript
// enum - store constants; duplicate value is not allowed here

// enum types: numeric, string, hetergenous

// numeric enum
enum RequestType {
    //ReadData = 1,
    ReadData,
    SaveData ,
    DeleteData,
}
console.log(RequestType)
console.log(RequestType[1])
console.log(RequestType.ReadData)
console.log(RequestType['DeleteData'])

// string enum
enum RequestType2 {
    Fruite = 'Mango',
    Vagetables = 'Tomato'
}
console.log(RequestType2.Vagetables)

// hetergenous enum
enum RequestType3 {
    readData = 'READ_DATA',
    deleteData = 'DELETE_DATA',
    id = 101
}
console.log(RequestType3.id)
```
---
## 📚 Class 07: any type

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`index.ts`)
```typescript
let userName;

userName = 'Wasim',
userName = 101,
userName = true,
userName = [10,20];
```
---
## 📚 Class 08: Object type

### 📁 Folder Structure

![File Folder Structure](/img/img13.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`object-type.ts`)
```typescript
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



let users: object[];
users = [];

let user01: {userName:string, userId:number};
user01 = {userName:"Wasim", userId:101};
users.push(user01)

let user02: {userName:string, userId:number};
user02 = {userName:"Omar", userId:102};
users.push(user02)

//console.log(users)
for (const key in users) {
    //console.log(users)
    console.log(users[key])
}
```
---
## 📚 Class 09: Custom type

### 📁 Folder Structure

![File Folder Structure](/img/img14.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`custom-type.ts`)
```typescript
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
```
---