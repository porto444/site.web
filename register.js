const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const setError = (message) => {
    let element = document.getElementById("message");
    element.innerHTML = message
    element.style.color = "red";
}

const setSuccess = (message) => {
    let element = document.getElementById("message");
    element.innerHTML = message
    element.style.color = "green";
};


let submit = document.getElementById("submit")

submit.addEventListener("click", () => {

    let form = document.getElementById("signUpForm");
    form.addEventListener('submit', event => {
        event.preventDefault();


        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();


        if (usernameValue === '') {
            setError('Username is required');
        }

        if (emailValue === '') {
            setError('Email is required');
        }

        if (passwordValue === '') {
            setError('Password is required');
        } else if (passwordValue.length < 8) {
            setError('Password must be at least 8 character.')
        }

        if (password2Value === '') {
            setError('Please confirm your password');
        } else if (password2Value !== passwordValue) {
            setError("Passwords doesn't match");
        }
        else setSuccess("registaion successfully");
    });



})
