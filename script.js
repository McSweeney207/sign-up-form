const password = document.getElementById("password");
const pwCheck = document.getElementById("pwCheck");
const passwordSection = document.querySelector("password-section");
const errorPw = document.getElementById("errorPw");

password.addEventListener("input", checkMatch);

pwCheck.addEventListener("input", checkMatch);

function checkMatch(e) {
    console.log(password.value, pwCheck.value);
    if (password.value !== pwCheck.value) {
        password.classList.add("error");
        pwCheck.classList.add("error");
        errorPw.style.display = 'block';
    } else {
        password.classList.remove("error");
        pwCheck.classList.remove("error");
        errorPw.style.display = 'none';
    }
};

