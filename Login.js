const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (usernameValue === '') {
        setErrorFor(usernameInput, 'Username cannot be blank');
    } else {
        setSuccessFor(usernameInput);
    }

    if (passwordValue === '') {
        setErrorFor(passwordInput, 'Password cannot be blank');
    } else {
        setSuccessFor(passwordInput);
    }

    if (usernameValue !== '' && passwordValue !== '') {
        form.submit();
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
