function showDetails(id) {
    let details = document.getElementById(id);
    details.classList.toggle('hidden');
}


const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const successMessage = document.getElementById("success-message");

form.addEventListener('submit', function(event) {
    
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    let isValid = true;

    
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    }

    
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message';
        isValid = false;
    }

    
    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
    }

    event.preventDefault();
});

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typing-effect", {
        strings: ["Hi, my name is Luanna. Welcome to my Portfolio <3"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true
    });
});
