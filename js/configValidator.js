// to reach all the inputs and configure the validation
const inputs = {
    firstname: {
        element: document.querySelector("#first"),
        elementErrorMessage: document.querySelector('.firstnameError'),
        errorMessage: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", 
        regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
    }, 
    lastname: {
        element: document.querySelector("#last"),
        elementErrorMessage: document.querySelector('.lastnameError'),
        errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
        regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ\s]{2,}$/,
    },
    email: {
        element: document.querySelector("#email"),
        elementErrorMessage: document.querySelector('.emailError'),
        errorMessage: 'Veuillez saisir un email valide.',
        regex : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    birthdate: {
        element: document.querySelector('#birthdate'),
        elementErrorMessage: document.querySelector('.birthdateError'),
        errorMessage: 'Vous devez entrer votre date de naissance.',
        regex : /^([123]0|[012][1-9]|31)\/(0[1-9]|1[012])\/(19[0-9]{2}|2[0-9]{3})$/
    }, 
    contest: {
        element: document.querySelector("#quantity"),
        elementErrorMessage: document.querySelector('.contestError'),
        errorMessage: 'Vous devez indiquer un nombre ("0" si vous n\"avez participé à aucun tournois).',
        regex : /^\d$/
    },
    location: {
        element: document.querySelectorAll("input[name='location']"),
        elementErrorMessage: document.querySelector('.locationError'),
        errorMessage: 'Vous devez choisir une option.',
        icons: document.querySelectorAll(".checkbox-label .checkbox-icon")
    },
    checkbox: {
        element: document.querySelector('#checkbox1'), 
        elementErrorMessage: document.querySelector('.conditionsError'),
        errorMessage: 'Vous devez acceptez les termes et conditions.',
    }
};

// to reach all elements that display error messages for the form validation
const errorMessageInput = document.querySelectorAll(".formData div");

export {inputs, errorMessageInput};