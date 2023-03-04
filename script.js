const fName = document.querySelector("#fname")
const lName = document.querySelector("#lname")
const phone = document.querySelector("#phone")
const eMail = document.querySelector("#email")
const fNameError = document.querySelector("#fname-error");
const lNameError = document.querySelector("#lname-error")
const phoneError = document.querySelector("#phone-error")
const eMailError = document.querySelector("#email-error")

fName.addEventListener("input", function(e){
    if(!fName.value){
        fNameError.textContent = "Please write your full name";
    } else if(containsNumbers(fName.value)){
        fNameError.textContent = "Numbers are not allowed"
    } else{
        fNameError.textContent = "";
    }
});

lName.addEventListener("input", function(e){
    if(!lName.value){
        lNameError.textContent = "Please write your full name";
    } else if(containsNumbers(lName.value)){
        lNameError.textContent = "Numbers are not allowed"
    } else{
        lNameError.textContent = "";
    }
});

phone.addEventListener("input", function(e){
    if(isNaN(phone.value)) { 
        phoneError.textContent = "Characters are not allowed"
    } else if((phone.value).length != 10){
        phoneError.textContent = "Please type a 10-digit phone number"
    } else{
        phoneError.textContent = "";
    }
});


function containsNumbers(str) {
    return /\d/.test(str);
}