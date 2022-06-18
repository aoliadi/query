'use strict';
 
const form = document.getElementById("form-js");
const inputs = Array.from(document.querySelectorAll("input"));
const errorIcon = document.getElementsByClassName("error-icon");
var errorMessage = document.getElementsByClassName("error-mssg");

function checkLength(param) {
    var parentChildren = param.parentElement.children;
    
    if (param.name !== 'email' && param.value.trim().length < 2) {
        param.classList.remove('success-state');
        param.classList.add('error-state');
        parentChildren[1].classList.remove('hide');
        parentChildren[2].innerHTML = 'Value cannot be lower than two characters';
        parentChildren[2].classList.remove('hide');
    } else if  (param.name === "email" && checkEmail(param.value.trim()) === false) {
        parentChildren[2].innerHTML = 'Provide a valid email address';
    } else {
        param.classList.add('success-state');
        param.classList.remove('error-state');
        parentChildren[1].classList.add('hide');
        parentChildren[2].classList.add('hide');
    }
};

function isEmpty() {
    inputs.forEach( (input) => {
        if (input.value.trim() == '' || input.value.trim() === null) {
            input.classList.remove('success-state');
            inputs[inputs.indexOf(input)].classList.add('error-state');
            errorIcon[inputs.indexOf(input)].classList.remove('hide');
            errorMessage[inputs.indexOf(input)].innerHTML = 'Field cannot be empty';
            errorMessage[inputs.indexOf(input)].classList.remove('hide');
        } else {
            checkLength(input);
        }
    });
};

function checkEmail(mail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isEmpty();
});