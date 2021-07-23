// variables
const greenBorder = "#279e7a 2px solid";
const redBorder = "#FF4E60 2px solid";

// DOM Elements
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const contest = document.querySelector("#quantity");
const inputlocation = document.querySelectorAll("input[name='location']");
const conditionsbox = document.querySelector('.checkbox2-label .checkbox-icon');
const birthdate = document.querySelector('#birthdate');

// Form Validation
const validate = (e) => {

    // regular expression
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // to check if the first name is not empty or if it have 2 letters minimum
    if (firstname.value == "" || firstname.value.length < 2 ) {
        firstname.style.border = redBorder;
        e.preventDefault();
    } else {
        firstname.style.border = greenBorder;
    }

    // to check if the last name is not empty or if it have 2 letters minimum
    if (lastname.value == "" || lastname.value.length < 2) {
        lastname.style.border = redBorder;
        e.preventDefault();
    } else {
        lastname.style.border = greenBorder;
    }

    // To check if the email is correct
    if (regexEmail.test(email.value)) {
        email.style.border = greenBorder;
    } else {
        email.style.border = redBorder;
        e.preventDefault();
    }

    if (birthdate.value == '') {
        birthdate.style.border = redBorder;
        e.preventDefault();
    } else {
        birthdate.style.border = greenBorder;
    }

    // to check that the type of the value of number of contest is a number
    if (isNaN(contest.value) || contest.value == "") {
        contest.style.border = redBorder;
        e.preventDefault();
    } else {
        contest.style.border = greenBorder;
    }

    // to check if a location is selected
    for (let i = 0; i < inputlocation.length; i++) {
        if (inputlocation[i].checked) {
            for (let i = 0; i < inputlocation.length; i++){
                document.querySelectorAll(".checkbox-label .checkbox-icon")[i].style.border = greenBorder;
            }
            break;
        }
        if (inputlocation.length == i+1) {
            for (let i = 0; i < inputlocation.length; i++){
                document.querySelectorAll(".checkbox-label .checkbox-icon")[i].style.border = redBorder;
                e.preventDefault();
            }
        } 
    }

    // to check if the general conditions box is checked
    if (checkbox1.checked) {
        conditionsbox.style.border = greenBorder;
    } else {
        conditionsbox.style.border = redBorder;
        e.preventDefault();
    }

    e.preventDefault();
}

export default validate; 