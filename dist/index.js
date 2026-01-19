"use strict";
// const form = document.querySelector("form")!;  or
const userForm = document.querySelector(".user-form");
console.log(userForm);
const userName = document.querySelector("#name");
console.log(userName);
const userEmail = document.querySelector("#email");
console.log(userEmail);
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
    };
    console.log(data);
});
//# sourceMappingURL=index.js.map