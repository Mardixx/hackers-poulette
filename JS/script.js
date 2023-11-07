/* import { test } from './parts/_validate.js'; */

/* test(); */
const fname = document.querySelector('.name');
fname.addEventListener('keyup', () => {
    let fnameValue = document.querySelector('.name').value;
    console.log(fnameValue);
    if (fnameValue.length < 2) {
        fname.style.border = '5px ridge red';
    } else {
        fname.style.border = '5px ridge green';            
    }
})