const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");

console.log(pwd);

pwd.addEventListener("input", () => {
    console.log(pwd.textContent);
    pwdConfirm.addEventListener("input", () => {});
});
