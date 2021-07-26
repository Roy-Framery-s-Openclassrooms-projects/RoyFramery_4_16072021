//  Dom Elements Nav
const icon = document.querySelector('.icon');

const editNav = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
      icon.style.color = 'white';
      icon.style.background = 'red';
      icon.style.borderRadius = '15px';
  } else {
      x.className = "topnav";
      icon.style.color = 'red';
      icon.style.background = 'white';
  }
}

// DOM Elements modal
const modalbg = document.querySelector(".bground");

// launch modal form
const launchModal = () => {modalbg.style.display = "block";}

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
  document.querySelector('form').style.display ='block';
  document.querySelector('.confirm-message').style.display ='none';

}

export {editNav, launchModal, closeModal}