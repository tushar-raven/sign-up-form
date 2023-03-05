const fName = document.querySelector("#fname");
const lName = document.querySelector("#lname");
const phone = document.querySelector("#phone");
const eMail = document.querySelector("#email");
const password = document.querySelector("#pwd");
const passMatch = document.querySelector("#confirm-pwd");
const button = document.querySelector("#button");

const fNameError = document.querySelector("#fname-error");
const lNameError = document.querySelector("#lname-error");
const phoneError = document.querySelector("#phone-error");
const eMailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#pwd-error");
const passMatchError = document.querySelector("#confirm-pwd-error");
const form = document.querySelector("form")

fName.addEventListener("input", function (e) {
    if (!fName.value) {
        fNameError.textContent = "Please write your first name";
    } else if (containsNumbers(fName.value)) {
        fNameError.textContent = "Numbers are not allowed"
    } else {
        fNameError.textContent = "";
    }
});

lName.addEventListener("input", function (e) {
    if (!lName.value) {
        lNameError.textContent = "Please write your last name";
    } else if (containsNumbers(lName.value)) {
        lNameError.textContent = "Numbers are not allowed"
    } else {
        lNameError.textContent = "";
    }
});

phone.addEventListener("input", function (e) {
    if (isNaN(phone.value)) {
        phoneError.textContent = "Characters are not allowed"
    } else if ((phone.value).length != 10) {
        phoneError.textContent = "Please type a 10-digit phone number"
    } else {
        phoneError.textContent = "";
    }
});

eMail.addEventListener("input", function (e) {
    if (eMail.validity.patternMismatch) {
        eMailError.textContent = "Enter a valid e-mail address"
    } else {
        eMailError.textContent = "";
    }
});

password.addEventListener("input", function (e) {
    passMatchCheck()

    if (password.validity.patternMismatch) {
        passwordError.textContent = `Must have at least 8 characters, 1 capital letter, and 1 number.`
    } else {
        passwordError.textContent = "";
    }
});

passMatch.addEventListener("input", (e) => {
    passMatchCheck()
});

function passMatchCheck() {
    if (password.value != passMatch.value) {
        passMatchError.textContent = "Password are not matching";
        passMatch.classList.add("error-box");
        button.disabled = true;
    } else {
        passMatchError.textContent = "";
        button.disabled = false;
        passMatch.classList.remove("error-box");
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Your form is submitted!")
    location.reload()
})

function containsNumbers(str) {
    return /\d/.test(str);
}

function checkEmail(email) {
    return email.match(/^\S+@\S+\.\S+$/);
}