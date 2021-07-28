export default class Modal {

    // DOM    
    static element = {
        navModal : document.querySelector(".icon"),
        modalBtn : document.querySelectorAll(".modal-btn"),
        modalClose : document.querySelectorAll(".close-btn"),
        myTopnav : document.getElementById("myTopnav"),
        icon : document.querySelector('.icon'),
        modalbg : document.querySelector(".bground"),
        form : document.querySelector('form'),
        confirmMessage : document.querySelector('.confirm-message')
    }

    static modalEvents = () => {
        // lunch modal nav
        this.element.navModal.onclick = () => { this.editNav(); };

        // launch modal event
        this.element.modalBtn.forEach((btn) => btn.onclick = () => { this.launchModal(); });

        // close modal event
        this.element.modalClose.forEach((btn) => btn.onclick = () => { this.closeModal(); });
    }
    
    static editNav = () => {
        if (this.element.myTopnav.className === "topnav") {
            this.element.myTopnav.className += " responsive";
            this.element.icon.style.color = 'white';
        } else {
            this.element.myTopnav.className = "topnav";
            this.element.icon.style.color = 'red';
        }
    }
    
    // launch modal form
    static launchModal = () => {this.element.modalbg.style.display = "block";}
    
    // close modal form
    static closeModal = () => {
        this.element.modalbg.style.display = "none";
        this.element.form.style.display ='block';
        this.element.confirmMessage.style.display ='none';
    }
}