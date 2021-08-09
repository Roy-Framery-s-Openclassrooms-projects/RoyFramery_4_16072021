// to reach all the inputs and configure the validation
const inputs = {
    firstname: {
        element: document.querySelector("#first"),
        regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/
    }, 
    lastname: {
        element: document.querySelector("#last"),
        regex : /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ\s]{2,}$/,
    },
    email: {
        element: document.querySelector("#email"),
        regex : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    birthdate: {
        element: document.querySelector('#birthdate'),
        regex : /^([123]0|[012][1-9]|31)\/(0[1-9]|1[012])\/(19[0-9]{2}|2[0-9]{3})$/
    }, 
    contest: {
        element: document.querySelector("#quantity"),
        regex : /^\d$/
    },
    location: {
        element: document.querySelectorAll("input[name='location']"),
        icons: document.querySelectorAll(".checkbox-label .checkbox-icon")
    },
    checkbox: {
        element: document.querySelector('#checkbox1'), 
    }
};

// to reach all elements that display error messages for the form validation
const containerInput = document.querySelectorAll(".formData");

export {inputs, containerInput};