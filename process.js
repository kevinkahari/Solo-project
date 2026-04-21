const openBtn = document.getElementById("openProfileBtn");
const modal = document.getElementById("profileModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("profileForm");
const successMessage = document.getElementById("successMessage");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const sport = document.getElementById("sport").value;
    const school = document.getElementById("school").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const athleteProfile = {
        fullName,
        username,
        email,
        sport,
        school,
        password
    };

    localStorage.setItem("athleteProfile", JSON.stringify(athleteProfile));

    successMessage.textContent = "Profile created successfully!";
    form.reset();

    setTimeout(() => {
        modal.style.display = "none";
        successMessage.textContent = "";
    }, 2000);
});