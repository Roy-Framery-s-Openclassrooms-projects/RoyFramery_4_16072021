export default class Validator {
    
    constructor(inputs, errorMessageInput) {
        this.inputs = inputs;
        this.errorMessageInput = errorMessageInput;
    }
    valid = true;

    // methods for the validation
        // to check if the first name is not empty or if it have 2 letters minimum
        firstnameValidation = (element, regex) => element.value == "" || element.value.length < 2 || !regex.test(element.value) ? false : true;

        // to check if the first name is not empty or if it have 2 letters minimum
        lastnameValidation = (element, regex) => element.value == "" || element.value.length < 2 || !regex.test(element.value) ? false : true;

        // To check if the email is correct
        emailValidation = (element, regex) => !regex.test(element.value) ? false : true;

        // to check if the birth date is correct and not empty
        birthdateValidation = (element, regex) =>  element.value == "" || regex.test(element.value)  ? false : true;

        // to check if the type of the value of contest input is a number and it's not empty
        contestValidation = (element, regex) => !regex.test(element.value) || element.value == "" ? false : true;

        // to check if a location is selected
        locationValidation = (elements) => {
            for (let element of elements) if (element.checked) return true;
        };

        // to check if the general conditions box is checked
        checkboxValidation = (element) => element.checked;

    // to remove error messages
    removeErrorMessage = () => {
        this.valid = true;
        Array.from(this.errorMessageInput).map((field) => {
            field.innerText = '';
        });
        // to change color of location icons
        // Array.from(this.inputs['location']['icons']).map((field) => {
        //     field.style.border = "#279e7a 2px solid";
        // })
    };

    launchValidation = () => {

        this.removeErrorMessage();
        
        for (const input in this.inputs) {
            switch (input) {
                case "firstname":
                    if (!this.firstnameValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].elementErrorMessage.innerText = this.inputs[input].errorMessage;
                        this.valid = false;
                    }
                    break;

                case "lastname":
                    if (!this.lastnameValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].elementErrorMessage.innerText = this.inputs[input].errorMessage;
                        this.valid = false;
                    }
                    break;

                case "email":
                    if (!this.emailValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].elementErrorMessage.innerText = this.inputs[input].errorMessage;
                        this.valid = false;
                    }
                    break;

                case "birthdate":
                    if (!this.birthdateValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].elementErrorMessage.innerText = this.inputs[input].errorMessage;
                        this.valid = false;
                    }
                    break;

                case "contest":
                    if (!this.contestValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].elementErrorMessage.innerText = this.inputs[input].errorMessage;
                        this.valid = false;
                    }
                    break;

                case "location":
                    if (!this.locationValidation(this.inputs[input].element)) {
                        this.inputs[input].elementErrorMessage.innerText = this.inputs[input].errorMessage;
                        // to change color of location icons
                        // Array.from(this.inputs[input].icons).map((field) => {
                        //     field.style.border = "#FF4E60 2px solid";
                        // })
                        this.valid = false;
                    }
                    break;

                case "checkbox":
                    if (!this.checkboxValidation(this.inputs[input].element)) {
                        this.inputs[input].elementErrorMessage.innerText = this.inputs[input].errorMessage;
                        this.valid = false;
                    }
                    break;

                default : 
                    break;
            }
        }
        return this.valid;
    }
}