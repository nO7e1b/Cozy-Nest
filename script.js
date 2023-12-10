const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', ()=> {
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled')
    window.requestAnimationFrame( ()=> {
        overlayBtn.classList.add('btnScaled');
    }) 
});

function togglePasswordVisibility(passwordIcon) {
    var passwordInput = passwordIcon.closest('.infield').querySelector('input[type="password"], input[type="text"]');

    if(passwordInput.type == 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    }else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.querySelector('.form-container.sign-in form');
    const signUpForm = document.querySelector('.form-container.sign-up form');

    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if(validateSignIn()){
            console.log("Sign In successful");
            window.location.href = 'index.html';
        }

    });

    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if(validateSignUp()) {
            console.log("Sign Up successful")
            window.location.href = 'index.html';
        }
    });

    function validateSignIn() {
        let email = signInForm.querySelector('input[type="email"]').value;
        let password = signInForm.querySelector('input[type="password"]').value;

        return validateEmail(email) && validatePassword(password);
    }

    function validateSignUp() {
        let name = signUpForm.querySelector('input[type="text"]').value;
        let email = signUpForm.querySelector('input[type="email"]').value;
        let password = signUpForm.querySelector('input[type="password"]').value;

        return validateEmail(email) && validatePassword(password);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/
        if(!passwordRegex.test(password)){
            alert("The password you entered is not safe");
            return false;
        }
        return true;
    }
});