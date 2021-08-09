export default class Validator {
    
    constructor(inputs, containerInput) {
        this.inputs = inputs;
        this.containerInput = containerInput;
    }
    valid = true;

    // methods for the validation

        /**
         * to check if the first name or last name 
         * is not empty or if it have 2 letters minimum
         * 
         * @param {object} element The DOM element to test
         * @param {object} regex The regex we want to test
         * @returns {boolean} Validation is correct or uncorrect
         */
        nameValidation = (element, regex) => element.value == "" || element.value.length < 2 || !regex.test(element.value) ? false : true;

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
        Array.from(this.containerInput).map((field) => {
            field.removeAttribute("data-error-visible");
        });
    };

    launchValidation = () => {

        this.removeErrorMessage();
        
        for (const input in this.inputs) {
            switch (input) {
                case "firstname":
                    if (!this.nameValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        console.log(this.inputs[input].regex)
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;

                case "lastname":
                    if (!this.nameValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;

                case "email":
                    if (!this.emailValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;

                case "birthdate":
                    if (!this.birthdateValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;

                case "contest":
                    if (!this.contestValidation(this.inputs[input].element, this.inputs[input].regex)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;

                case "location":
                    if (!this.locationValidation(this.inputs[input].element)) {
                        this.inputs[input].element[0].parentNode.setAttribute("data-error-visible", true);
                        this.valid = false;
                    }
                    break;

                case "checkbox":
                    if (!this.checkboxValidation(this.inputs[input].element)) {
                        this.inputs[input].element.parentNode.setAttribute("data-error-visible", true);
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