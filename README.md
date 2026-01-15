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

## class 01
![powershel img](/img/img01.png)