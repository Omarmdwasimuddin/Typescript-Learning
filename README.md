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

1. **TypeScript ফাইল তৈরি করুন** (`any-type.ts`)
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
## 📚 Class 10: Module export & import

### 📁 Folder Structure

![File Folder Structure](/img/img15.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`index.ts`)
```typescript
//01
//import { studentName, studentAge } from "./Student";

//function displayStudentInfo(): void {
    //console.log(`${studentName}, ${studentAge}`)
//}

//displayStudentInfo();


//02
//import { displayStudentInfo } from "./Student";
//displayStudentInfo();


//03
//import { studentName as name, studentAge as age } from "./Student";

//function displayStudentInfo(): void {
    //console.log(`${name}, ${age}`)
//}

//displayStudentInfo();

//04
import * as Student from "./Student";

function displayStudentInfo(): void {
    console.log(`${Student.studentName}, ${Student.studentAge}`)
}

displayStudentInfo();
```
2. **TypeScript ফাইল তৈরি করুন** (`Student.ts`)
```typescript
export let studentName: string = "Wasim Uddin";
export let studentAge: number = 28;


//02
//export function displayStudentInfo(): void {
    //console.log(`${studentName}, ${studentAge}`)
//}
```
---
## 📚 Class 11: `tsconfig.json` (Project Configuration)

এই ক্লাসে আমরা শিখবো **`tsconfig.json` কী, কেন ব্যবহার করা হয়, এবং প্র্যাক্টিক্যাল প্রজেক্টে কিভাবে সেটআপ করতে হয়**।

---

### ❓ `tsconfig.json` কী?

`tsconfig.json` হলো TypeScript প্রজেক্টের **configuration file**
এটা দিয়ে আমরা নির্ধারণ করি:

* কোন ফোল্ডার থেকে `.ts` ফাইল নেবে
* কোন ফোল্ডারে `.js` আউটপুট যাবে
* কোন JavaScript version টার্গেট করবে
* Strict type checking হবে কিনা
* Module system কী হবে

---

### 📁 Recommended Folder Structure

```
project-root/
│
├── src/
│   ├── index.ts
│   └── Student.ts
│
├── dist/
│   └── index.js
│
├── tsconfig.json
└── package.json
```

---

### 🛠️ `tsconfig.json` Create Command

```bash
npx tsc --init
```

এরপর নিচের কনফিগারেশন দিয়ে **`tsconfig.json` আপডেট করো** 👇

---

### ⚙️ `tsconfig.json` (Recommended Configuration)

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    /* File Layout */
    "rootDir": "./src",
    "outDir": "./dist",

    /* Environment Settings */
    "module": "nodenext",
    "target": "esnext",
    "types": [],

    /* Other Outputs */
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    /* Stricter Typechecking Options */
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    /* Style Options */
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    /* Recommended Options */
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  },

  "include": ["./src"],
  "files": ["./src/index.ts"]
}
```

---

### 🔍 Important Options Explained (Simple Language)

| Option           | কাজ                                 |
| ---------------- | ----------------------------------- |
| `rootDir`        | TypeScript source ফাইলের জায়গা      |
| `outDir`         | Compiled JavaScript ফাইল যাবে এখানে |
| `target`         | কোন JS version এ convert হবে        |
| `module`         | Import / Export system              |
| `strict`         | Strong type checking চালু করে       |
| `noUnusedLocals` | ব্যবহার না হওয়া ভ্যারিয়েবল ধরবে     |
| `sourceMap`      | Debugging সহজ করে                   |
| `declaration`    | `.d.ts` টাইপ ফাইল তৈরি করে          |

---

### ▶️ Compile Entire Project

এখন আলাদা করে ফাইল দিতে হবে না
শুধু এই কমান্ডই যথেষ্ট:

```bash
npx tsc
```

Watch mode এ রান করতে:

```bash
npx tsc --watch
```

---

### 🔄 Updated Workflow

```
src/*.ts → (tsc) → dist/*.js → (node dist/index.js)
```

---

### ⚡ Quick Notes

* `tsconfig.json` থাকলে `npx tsc index.ts` প্রয়োজন হয় না
* বড় প্রজেক্টে **এটাই স্ট্যান্ডার্ড সেটআপ**
* Next.js / React / Node প্রজেক্টে এই কনফিগ প্রায় একইভাবে ব্যবহার হয়

---
# 📚 Class 12: `tsconfig.json` (Browser-Friendly Configuration)

এই ক্লাসে আমরা শিখবো ব্রাউজার-বেসড TypeScript প্রজেক্টের জন্য `tsconfig.json` কনফিগারেশন।

---

## ⚙️ `tsconfig.json` (Browser-Friendly Configuration)

```json
{
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings - Browser friendly
    "module": "ESNext",
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    
    // JSX support (if needed)
    "jsx": "react-jsx",

    // Module resolution
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    
    // Output settings
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Strict Type Checking
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    
    // ES Module settings for browser
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 🔍 Important Options Explained (Simple Language)

| Option | কাজ |
|--------|------|
| `rootDir` | TypeScript source ফাইলের জায়গা |
| `outDir` | Compiled JavaScript ফাইল যাবে এখানে |
| `target` | কোন JS version এ convert হবে |
| `module` | Import / Export system |
| `lib` | Browser API support যোগ করে |
| `strict` | Strong type checking চালু করে |
| `noUnusedLocals` | ব্যবহার না হওয়া ভ্যারিয়েবল ধরবে |
| `sourceMap` | Debugging সহজ করে |
| `declaration` | `.d.ts` টাইপ ফাইল তৈরি করে |

---

## 🌐 HTML File (`public/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>User Registration</h1>
    <form class="user-form">
        <div>
            <label for="name">NAME:</label>
            <input type="text" id="name">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email">
        </div>
        <div>
            <button type="submit">Save</button>
        </div>
    </form>
    <script src="../dist/index.js" type="module"></script>
</body>
</html>
```

---

## 🎨 CSS File (`public/style.css`)

```css
*{
    background-color: chocolate;
    color: antiquewhite;
}

div{
    margin: 0.5rem 0;
}

input[type="email"]{
    width: 10rem;
}

h1 {
    font-family: Arial, sans-serif;
    text-align: center;
}

.user-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
```

---

## ▶️ Compile Entire Project

এখন আলাদা করে ফাইল দিতে হবে না
শুধু এই কমান্ডই যথেষ্ট:

```bash
npx tsc
```

Watch mode এ রান করতে:

```bash
npx tsc --watch
```

---

## 🔄 Updated Workflow

```
src/*.ts → (tsc) → dist/*.js → HTML page loads dist/index.js → Browser runs
```

---

## 📁 Final Project Structure

```
typescript-project/
├── src/
│   ├── index.ts
│   └── Student.ts
├── dist/
│   ├── index.js
│   ├── Student.js
│   └── (other compiled files)
├── public/
│   ├── index.html
│   └── style.css
├── tsconfig.json
└── package.json
```

---

## ⚡ Quick Notes

* `tsconfig.json` থাকলে `npx tsc index.ts` প্রয়োজন হয় না
* Browser-based প্রজেক্টের জন্য `lib: ["DOM"]` অত্যন্ত গুরুত্বপূর্ণ
* `"module": "ESNext"` ES6 Modules সাপোর্ট করে
* HTML ফাইলে `<script type="module">` ব্যবহার করতে হবে ES Modules এর জন্য
* এই সেটআপ React, Vue, বা যেকোনো ফ্রন্টএন্ড প্রজেক্টের জন্য উপযোগী

---

## 🚀 How to Run the Project

1. **TypeScript কম্পাইল করুন:**
```bash
npx tsc --watch
```

2. **Live Server চালু করুন:**
   - VS Code-এ `Live Server` এক্সটেনশন ইন্সটল করুন
   - `public/index.html` ফাইল ওপেন করে `Go Live` ক্লিক করুন
---