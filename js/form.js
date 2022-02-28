
// TEACHER'S CODE USED AS A REFERENCE 
const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm(event) {
    event.preventDefault();

    if (lengthCheck(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }
    if (lengthCheck(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (lengthCheck(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}

function lengthCheck(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regEx)) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener("submit", validateForm);