// const form = document.querySelector("form")!;  or
const userForm = document.querySelector(".user-form") as HTMLFormElement;
console.log(userForm)

const userName = document.querySelector("#name") as HTMLInputElement;
console.log(userName)

const userEmail = document.querySelector("#email") as HTMLInputElement;
console.log(userEmail)


userForm.addEventListener("submit", (event: Event)=>{
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
    };
    console.log(data);
});