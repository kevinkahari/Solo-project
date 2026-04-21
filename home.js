// ===== Mobile Menu =====
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// ===== Application Form =====
const form = document.querySelector("#application-form");
const message = document.querySelector("#form-message");

if (form && message) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const sport = document.querySelector("#sport").value.trim();
        const grade = document.querySelector("#grade").value.trim();

        if (!name || !sport || !grade) {
            message.innerText = "Please fill in all fields.";
            message.style.color = "red";
            return;
        }

        message.innerText = "Application submitted successfully!";
        message.style.color = "green";

        form.reset();
    });
}

// ===== Eligibility Checker =====
const checkBtn = document.querySelector("#check-eligibility");
const result = document.querySelector("#eligibility-result");

if (checkBtn && result) {
    checkBtn.addEventListener("click", () => {
        const age = parseInt(document.querySelector("#age").value);
        const score = parseInt(document.querySelector("#score").value);

        if (isNaN(age) || isNaN(score)) {
            result.innerText = "Please enter valid numbers.";
            result.style.color = "red";
            return;
        }

        if (age >= 15 && age <= 22 && score >= 70) {
            result.innerText = "You are eligible for the sports scholarship!";
            result.style.color = "green";
        } else {
            result.innerText = "Sorry, you do not meet the eligibility requirements.";
            result.style.color = "red";
        }
    });
}

// ===== Countdown Timer =====
const countdown = document.querySelector("#countdown");

if (countdown) {
    const deadline = new Date("July 30, 2026 23:59:59").getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            countdown.innerText = "Application deadline has passed.";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        countdown.innerText =
            `${days}d ${hours}h ${minutes}m remaining`;
    }, 1000);
}