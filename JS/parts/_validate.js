export const validateName = () => {
    const fname = document.querySelector('.name');
    fname.addEventListener('keyup', event => {
        let fnameValue = document.querySelector('.name').value;
        if (fnameValue.length < 2) {
            fname.style.border = '5px ridge red';
            if (event.key === 'Enter') {
                event.preventDefault();
                const div = document.querySelector('.nameDiv');
                const p = document.createElement('p')
                p.textContent = 'Two characters minimum required';
                div.appendChild(p);
                return false;
            } 
        } else {
            let divlength = document.querySelector('.nameDiv')
                for (let i = 1; divlength.childElementCount > 1; i++) {
                    divlength.removeChild(divlength.children[i]);
                    i = 0;
            }
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
                const div = document.querySelector('.lnameDiv');
                const p = document.createElement('p')
                p.textContent = 'Two characters minimum required';
                div.appendChild(p);
                return false;
              }
        } else {
            lname.style.border = '5px ridge green'; 
            let divlength = document.querySelector('.lnameDiv')
            for (let i = 1; divlength.childElementCount > 1; i++) {
                divlength.removeChild(divlength.children[i]);
                i = 0;
        }          
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
            let divlength = document.querySelector('.emailDiv')
            for (let i = 1; divlength.childElementCount > 1; i++) {
                divlength.removeChild(divlength.children[i]);
                i = 0;
            }
        } else {
            email.style.border = '5px ridge red';
            if (event.key === 'Enter') {
                event.preventDefault();
                let div = document.querySelector('.emailDiv');
                let p = document.createElement('p')
                p.textContent = '@gmail.com required';
                div.appendChild(p);
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
                let div = document.querySelector('.countryDiv');
                let p = document.createElement('p')
                p.textContent = 'Four characters minimum required';
                div.appendChild(p);
                return false;
              }
            
            
        } else {
            country.style.border = '5px ridge green'; 
            let divlength = document.querySelector('.countryDiv')
            for (let i = 1; divlength.childElementCount > 1; i++) {
                divlength.removeChild(divlength.children[i]);
                i = 0;
        }          
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
                let div = document.querySelector('.countryDiv');
                let p = document.createElement('p')
                p.textContent = 'Ten characters minimum required';
                div.appendChild(p);
                return false;
              }
            
            
        } else {
            message.style.border = '5px ridge green';           
        }
    })
}