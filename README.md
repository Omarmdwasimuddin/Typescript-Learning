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

### 📁 Project Structure
প্রথমে একটি নতুন ফোল্ডার তৈরি করুন যেখানে আমরা TypeScript প্রোগ্রাম লিখব।

![File Folder Structure](/img/img05.png)

### 🔧 Setup & Compilation Process

1. **TypeScript ফাইল তৈরি করুন** (`index.ts`)
```typescript
let userName = "Wasim";
console.log("Hello, " + userName + "!");
```

![TypeScript File Screenshot](/img/img03.png)

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