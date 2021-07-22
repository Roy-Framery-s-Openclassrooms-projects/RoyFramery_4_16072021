// DOM Elements
const form = document.querySelector(".register");
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const email = document.querySelector("#email");
const contest = document.querySelector("#quantity");
const inputlocation = document.querySelectorAll("input[name='location']");
const conditionsbox = document.querySelector('checkbox1');
const birthdate = document.querySelector('#birthdate');

// Form Validation
form.addEventListener('submit', (e) => {

    // regular expression
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // to check if the first name is not empty or if it have 2 letters minimum
    if (firstname.value == "" || firstname.value.length < 2 ) {
        firstname.style.border = "red 2px solid";
        e.preventDefault();
    } else {
        firstname.style.border = "#279e7a 2px solid";
    }

    // to check if the last name is not empty or if it have 2 letters minimum
    if (lastname.value == "" || lastname.value.length < 2) {
        lastname.style.border = "red 2px solid";
        e.preventDefault();
    } else {
        lastname.style.border = "#279e7a 2px solid";
    }

    // To check if the email is correct
    if (regexEmail.test(email.value)) {
        email.style.border = "#279e7a 2px solid";
    } else {
        email.style.border = "red 2px solid";
        e.preventDefault();
    }

    if (birthdate.value == '') {
        birthdate.style.border = 'red 2px solid';
        e.preventDefault();
    } else {
        birthdate.style.border = '#279e7a 2px solid';
    }
    console.log(birthdate.value);


    // to check that the type of the value of number of contest is a number
    if (isNaN(contest.value) || contest.value == "") {
        contest.style.border = "red 2px solid";
        e.preventDefault();
    } else {
        contest.style.border = "#279e7a 2px solid";
    }

    // to check if a location is selected
    for (let i = 0; i < inputlocation.length; i++) {
        if (inputlocation[i].checked) {
            for (let i = 0; i < inputlocation.length; i++){
                document.getElementsByClassName("checkbox-icon")[i].style.border = '#279e7a solid 2px';
            }
            break;
        }
        if (inputlocation.length == i+1) {
            for (let i = 0; i < inputlocation.length; i++){
                document.getElementsByClassName("checkbox-icon")[i].style.border = 'red solid 2px';
                e.preventDefault();
            }
        } 
    }

    // to check if the general conditions box is checked
    if (checkbox1.checked) {
        document.querySelector('.checkbox2-label .checkbox-icon').style.border = '#279e7a solid 2px';
    } else {
        document.querySelector('.checkbox2-label .checkbox-icon').style.border = 'red solid 2px';
        e.preventDefault();
    }

    e.preventDefault();
})


// function check_value($value){ // this function will check each values send by the form
//     $value = $value.trim();// Delete useless spaces
//     console.log("trim", $value); 
//     function stripslashes ($value) {
//         return ($value + '')
//         .replace(/\\(.?)/g, function (s, n1) {
//             switch (n1) {
//                 case '\\':
//                     return '\\'
//                 case '0':
//                     return '\u0000'
//                 case '':
//                     return ''
//                 default:
//                     return n1
//             }
//         })
//     }
//     $value = stripslashes($value); // Delete antslashes
//     console.log("stripslashes", $value); // Delete useless spaces
//     function escapeHtml($value) {
//         return $value
//             .replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/"/g, "&quot;")
//             .replace(/'/g, "&#039;");
//     };
//     $value = escapeHtml($value); // Convert special characters into HTML entities
//     console.log("htmlspecialchars", $value); 
//     return $value;
// }