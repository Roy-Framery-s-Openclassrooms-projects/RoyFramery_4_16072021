const editNav = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
}

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
  document.querySelector('form').style.display ='block';
  document.querySelector('.confirm-message').style.display ='none';

}

export {editNav, launchModal, closeModal}