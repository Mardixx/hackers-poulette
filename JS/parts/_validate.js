export const validateName = () => {
    const fname = document.querySelector('.name');
    fname.addEventListener('keyup', event => {
        let fnameValue = document.querySelector('.name').value;
        if (fnameValue.length < 2) {
            fname.style.border = '5px ridge red';
            if (event.key === 'Enter') {
                event.preventDefault();
                return false;
            }
        } else {
            fname.style.border = '5px ridge green';           
        }
    })
}
export const validatelastName = () => {
    const lname = document.querySelector('.lname');
    lname.addEventListener('keyup', event => {
        let lnameValue = document.querySelector('.lname').value;
        if (lnameValue.length < 2) {
            lname.style.border = '5px ridge red';
            if (event.key === 'Enter') {
                event.preventDefault();
                return false;
              }
            
            
        } else {
            lname.style.border = '5px ridge green';           
        }
    })
}
export const validateGender= () => {
    const gender = document.querySelector('.gender');
    gender.addEventListener('change', () => {
        gender.style.border = '5px ridge green';           
    })
}
export const validateEmail = () => {
    const email = document.querySelector('.email');
    email.addEventListener('keyup', event => {
        let emailValue = document.querySelector('.email').value;
        if (emailValue.includes('@gmail.com')) {
            email.style.border = '5px ridge green';
        } else {
            email.style.border = '5px ridge red';
            if (event.key === 'Enter') {
                event.preventDefault();
                return false;
              }
            
                       
        }
    })
}
export const validateCountry = () => {
    const country = document.querySelector('.country');
    country.addEventListener('keyup', event => {
        let countryValue = document.querySelector('.country').value;
        if (countryValue.length < 4) {
            country.style.border = '5px ridge red';
            if (event.key === 'Enter') {
                event.preventDefault();
                return false;
              }
            
            
        } else {
            country.style.border = '5px ridge green';           
        }
    })
}
export const validateSubject = () => {
    const choices = document.querySelector('.choices');
    choices.addEventListener('change', () => {
        choices.style.border = '5px ridge green';           
    })
}
export const validateMessage = () => {
    const message = document.querySelector('.message');
    message.addEventListener('keyup', event => {
        let messageValue = document.querySelector('.message').value;
        if (messageValue.length < 10) {
            message.style.border = '5px ridge red';
            if (event.key === 'Enter') {
                event.preventDefault();
                return false;
              }
            
            
        } else {
            message.style.border = '5px ridge green';           
        }
    })
}