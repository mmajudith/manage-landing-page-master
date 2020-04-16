'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let email = form.email.value;
    form.reset();
    let regx = /^[\w.]+@\w+\.(com|net|org|oi)$/;

    if(regx.test(email)){
         document.querySelector('input').style.border = '2px solid limegreen';
    }else{
        document.querySelector('input').style.border = '2px solid red';
    }

});