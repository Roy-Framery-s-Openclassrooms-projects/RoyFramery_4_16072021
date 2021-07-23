// imports
import {editNav, launchModal, closeModal} from './modal.js';
import validate from './formValidation.js';

// DOM Elements
const navModal = document.querySelector(".icon");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector('.close');
const form = document.querySelector(".register");

// lunch modal nav
navModal.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener('click', closeModal);

// Validate the form
form.addEventListener('submit', validate);

