import Validator from "./js/class/validator.js";
import Modal from "./js/class/modal.js";
import {inputs, containerInput} from "./js/configValidator.js";

// DOM 
const form = document.querySelector(".register");

Modal.modalEvents();

// Validate the form
const validator = new Validator(inputs, containerInput);

form.onsubmit = (e) => {
    e.preventDefault();
    if (validator.launchValidation()) {
        form.reset();
        form.style.display ='none';
        document.querySelector('.confirm-message').style.display ='flex';
    }
}