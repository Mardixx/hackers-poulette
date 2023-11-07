import { validateCountry, validateEmail, validateGender, validateMessage, validateName, validateSubject, validatelastName } from "./parts/_validate.js";

validateName();
validatelastName();
validateGender();
validateEmail(); 
validateCountry();   
validateSubject();
validateMessage();


const submit = document.querySelector('.submit')
submit.addEventListener("click", event => {
    let fnameValue = document.querySelector('.name').value;
    let lnameValue = document.querySelector('.lname').value;
    let emailValue = document.querySelector('.email').value;
    let countryValue = document.querySelector('.country').value;
    let messageValue = document.querySelector('.message').value;
    if (fnameValue.length < 2) {
        event.preventDefault();
        return false;
    } else if (lnameValue.length < 2) {
        event.preventDefault();
        return false;
    } else if (!emailValue.includes('@gmail.com')) {
        event.preventDefault();
        return false;
    } else if (countryValue.length < 4) {
        event.preventDefault();
        return false;
    } else if (messageValue.length < 10) {
        event.preventDefault();
        return false;
    } 
})