const rightEmail = 'jerry@gmail.com';
const rightPassword = 'Tom&Jerry2000';

const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = loginForm.elements.email.value;
    const passwordValue = loginForm.elements.password.value; 

    if (emailValue === rightEmail && passwordValue === rightPassword) {
        return console.log({
            elementsEmail: rightEmail,
            elementsPassword: rightPassword
        });
        
    } else if (emailValue === "" || passwordValue === "") {
        return alert("Fill up all the forms!");
    } else {
        alert("Wrong email or password");
    }

    loginForm.reset();
})
