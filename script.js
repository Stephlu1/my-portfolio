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

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-theme");
    toggleBtn?.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    new Typed("#typing-effect", {
        strings: ["Hello my name is Luanna. Welcome to my Portfolio <3"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true
    });
});

const canvas = document.getElementById('petal-canvas');
const ctx = canvas.getContext('2d');
let petals = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createPetal() {
    return {
        x: Math.random() * canvas.width,
        y: -20,
        size: 15 + Math.random() * 10,
        speedY: 1 + Math.random() * 2,
        speedX: Math.random() * 1 - 0.5,
        angle: Math.random() * Math.PI,
        spin: 0.01 + Math.random() * 0.02,
        color: `rgba(255, ${150 + Math.random() * 80}, ${200 + Math.random() * 55}, 0.8)`
    };
}

function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-p.size / 2, p.size / 2, 0, p.size);
    ctx.quadraticCurveTo(p.size / 2, p.size / 2, 0, 0);
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.restore();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (petals.length < 80) {
        petals.push(createPetal());
    }

    for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        drawPetal(p);

        if (p.y > canvas.height + 50) {
            petals[i] = createPetal();
        }
    }


    requestAnimationFrame(update);
}

update();