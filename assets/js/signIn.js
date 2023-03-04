import { supabase } from './supabaseClient.js'
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const emailValidity = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValidity.test(emailInput.value)) {
        errorDiv.textContent = 'invalid email address';
        timeOut();
        return;
    }
    if (passwordInput.value.length < 8) {
        errorDiv.textContent = 'Password characters must be more than 8'
        timeOut();
        return;
    }
 
  if(emailInput.value && passwordInput){
    let { data, error } = await
    supabase. auth. signInWithPassword ({
    email: emailInput.value, 
    password: passwordInput.value
})
if (data){
    console.log (data);
}
if (error){
    console.log(error);
}
}
})

function timeOut() {
    setTimeout(() => {
        errorDiv.textContent = ""
    }, 2000)
}