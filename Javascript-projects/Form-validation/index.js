
const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('email');
const password = document.getElementById('Password');
const Cpassword = document.getElementById('Confirm-password');
const submit = document.getElementById('btn');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validationInput();
})
const validationInput = () => {

    const usernameInput = username.value.trim();
    const emailInput = Email.value.trim();
    const passwordInput = password.value.trim();
    const CpasswordInput = Cpassword.value.trim();

    if (usernameInput === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
    if (emailInput === '') {
        setErrorFor(Email, 'Email cannot be blank');
    } else if (!emailInput.includes('@') || !emailInput.includes('.')) {
        setErrorFor(Email, 'Please enter a valid email');
    } else {
        setSuccessFor(Email);
    }
    if (passwordInput === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordInput.length < 8) {
        setErrorFor(password, 'Password must be at least 8 characters');
    } else {
        setSuccessFor(password);
    }
    if (CpasswordInput === '') {
        setErrorFor(Cpassword, 'Please confirm your password');
    } else if (CpasswordInput !== passwordInput) {
        setErrorFor(Cpassword, 'Passwords do not match');
    } else {
        setSuccessFor(Cpassword);
    }

}

const setErrorFor = (element, message) => {
    const inputControl = element.parentElement;
    const errorControl = inputControl.querySelector('.error')
    errorControl.innerText = message;

    inputControl.classList.add('error');
    errorControl.classList.remove('success');
}

const setSuccessFor = element => {
    const inputControl = element.parentElement;
    const errorControl = inputControl.querySelector('.error');

    inputControl.classList.add('success');
    errorControl.classList.remove('error');
    errorControl.element = '';
}