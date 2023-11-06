/* import { test } from './parts/_validate.js'; */

/* test(); */
let fname = document.querySelector('.name');
fname.addEventListener('keyup', () => {
    let fnameValue = document.querySelector('.name').value;
    console.log(fnameValue);
    if (fnameValue.length < 2) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'green';            
    }
})