document.getElementById('login-button').addEventListener('click',function(){
    const emailInput = document.getElementById('input-email').value;
    console.log(emailInput);
    const passwordInput = document.getElementById('input-password').value;
    console.log(passwordInput);

    if(emailInput == 'emonmorol@gmail.com' && passwordInput == 'brothers'){
        window.location.href = 'money-management.html'
    }
})