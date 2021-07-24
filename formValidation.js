// variables
const greenBorder = "#279e7a 2px solid";
const redBorder = "#FF4E60 2px solid";

// DOM Elements
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector('#birthdate');
const contest = document.querySelector("#quantity");
const inputlocation = document.querySelectorAll("input[name='location']");
const conditionsbox = document.querySelector('.checkbox2-label .checkbox-icon');

// Form Validation
const validate = (e) => {

    // Error Dom
    const firstnameError = document.querySelector('.firstnameError');
    const lastnameError = document.querySelector('.lastnameError');
    const emailError = document.querySelector('.emailError');
    const birthdateError = document.querySelector('.birthdateError');
    const contestError = document.querySelector('.contestError');
    const locationError = document.querySelector('.locationError');
    const conditionsError = document.querySelector('.conditionsError');


    // regular expression
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexBirthdate = /^([123]0|[012][1-9]|31)\/(0[1-9]|1[012])\/(19[0-9]{2}|2[0-9]{3})$/;

    // to check if the first name is not empty or if it have 2 letters minimum
    if (firstname.value == "" || firstname.value.length < 2 ) {
        firstname.style.border = redBorder;
        firstnameError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        e.preventDefault();
    } else {
        firstname.style.border = greenBorder;
        firstnameError.innerText = "";
    }

    // to check if the last name is not empty or if it have 2 letters minimum
    if (lastname.value == "" || lastname.value.length < 2) {
        lastname.style.border = redBorder;
        lastnameError.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        e.preventDefault();
    } else {
        lastname.style.border = greenBorder;
        lastnameError.innerText = '';
    }

    // To check if the email is correct
    if (regexEmail.test(email.value)) {
        email.style.border = greenBorder;
        emailError.innerText = '';
    } else {
        email.style.border = redBorder;
        emailError.innerText = 'Veuillez saisir un email valide.';
        e.preventDefault();
    }

    // to control the age of the user is over 18
    function isOver18(dateOfBirth) {
        // find the date 18 years ago
        const date18YrsAgo = new Date();
        date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);

        // check if the date of birth is before that date
        return Date.parse(dateOfBirth) <= Date.parse(date18YrsAgo);
    }
    
    // to check if the birth date is correct 

    if (birthdate.value == '' || regexBirthdate.test(birthdate.value)) {
        birthdate.style.border = redBorder;
        birthdateError.innerText = 'Vous devez entrer votre date de naissance.';
        e.preventDefault();
    } else {
        if (!isOver18(birthdate.value)){
            birthdate.style.border = redBorder;
            birthdateError.innerText = 'Vous devez être majeur pour participer au tournois.';
            e.preventDefault();    
        }else {
            birthdate.style.border = greenBorder;
            birthdateError.innerText = '';
        }
    }

    // to check that the type of the value of number of contest is a number
    if (isNaN(contest.value) || contest.value == "") {
        contest.style.border = redBorder;
        contestError.innerText = 'Vous devez indiquer un nombre ("0" si vous n\"avez participé à aucun tournois).';
        e.preventDefault();
    } else {
        contest.style.border = greenBorder;
        contestError.innerText = '';
    }

    // to check if a location is selected
        // if the value is superor to 0 or if it's empty, 
            // then the user have to pick a city
        // else if the contest value = 0, 
            // then the user don't have to pick a city
    if (contest.value > 0 || contest.value == ""){
        for (let i = 0; i < inputlocation.length; i++) {
            if (inputlocation[i].checked) {
                for (let i = 0; i < inputlocation.length; i++){
                    document.querySelectorAll(".checkbox-label .checkbox-icon")[i].style.border = greenBorder;
                    locationError.innerText = '';
                }
                break;
            }
            if (inputlocation.length == i+1) {
                for (let i = 0; i < inputlocation.length; i++){
                    document.querySelectorAll(".checkbox-label .checkbox-icon")[i].style.border = redBorder;
                    locationError.innerText = 'Vous devez choisir une option.';
                    e.preventDefault();
                }
            } 
        }
    } else if (contest.value == 0){
        for (let i = 0; i < inputlocation.length; i++){
            document.querySelectorAll(".checkbox-label .checkbox-icon")[i].style.border = greenBorder;
            document.querySelectorAll(".checkbox-input[type='radio']")[i].checked = false;
            locationError.innerText = '';
        }
    }

    // to check if the general conditions box is checked
    if (checkbox1.checked) {
        conditionsbox.style.border = "none";
        conditionsError.innerText = '';
    } else {
        conditionsbox.style.border = redBorder;
        conditionsError.innerText = 'Vous devez vérifier que vous acceptez les termes et conditions.';
        e.preventDefault();
    }

    e.preventDefault();
}

export default validate; 