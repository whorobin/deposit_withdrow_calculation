// step 1) 
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2 : (get email) = .value use korte hobe. 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 : (get password) =
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    // step 4 : (verify email and password)
    if (email === 'admin@gmail.com' && password === '123456789') {
        window.location.href = 'bank.html';
    }
    else {
        alert('error');
    }
})