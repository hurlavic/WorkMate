const form = document.querySelector('.signIn');
const emailInput = document.getElementById('email-In');
const passwordInput = document.getElementById('password-In');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const emailValidity = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValidity.test(emailInput.value)){
        errorDiv.textContent = 'invalid email address';
        return; 
    }

    if(passwordInput.length < 6){
        errorDiv.textContent = 'Please ensure password characters is more than 6'
        return;
    }

    form.submit();
})
