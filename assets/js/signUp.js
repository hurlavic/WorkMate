import { supabase } from './supabaseClient.js'
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('error');
const fullName = document.getElementById('fullname');
const confirmPassword = document.getElementById('confirm-password');


form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const emailValidity = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fullName.value === "" || emailInput.value === "" || passwordInput.value === "") {
        errorDiv.textContent = 'All fields are required'
        timeOut();
        return;
    }
    if (!emailValidity.test(emailInput.value)){
        errorDiv.textContent = 'Invalid email address';
        timeOut();
        return;
    }
    if (passwordInput.value.length < 8) {
        errorDiv.textContent = 'Password characters must be more than 8'
        timeOut();
        return;
    }
    if (passwordInput.value.length !== confirmPassword.value.length) {
        errorDiv.textContent = 'Passwords do not match'
        timeOut();
        return;
    }

    if (emailInput.value && passwordInput.value && fullName.value) {

        let { data, error } = await supabase.auth.signUp({
            email: emailInput.value,
            password: passwordInput.value
        })
        if (error) {
            console.log(error)
            return
        }
        const id = data.user.id
        let { data: user, error: usererror } = await supabase
            .from('profiles')
            .insert([
                { user_id: id, fullname: fullName.value, email: emailInput.value }
            ])
        if (data) {
            console.log(user)
        } else {
            console.log(usererror)
        }

    }
})

function timeOut() {
    setTimeout(() => {
        errorDiv.textContent = ""
    }, 2000)
}