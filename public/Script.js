const wrapper = document.querySelector(".wrapper");
const loginBtn = document.querySelector(".btnLogin-popup");
const closeBtn = document.querySelector(".icon-close");
const form = document.getElementById("loginForm");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("passwordInput");

// OPEN POPUP
loginBtn.addEventListener("click", () => {
    wrapper.classList.add("active");
});

// CLOSE POPUP
closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("active");
});

// TOGGLE PASSWORD VISIBILITY
togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle icon classes
    togglePassword.classList.toggle("bx-show");
    togglePassword.classList.toggle("bx-hide");
});

// LOGIN
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = form.querySelector("input[type='text']").value;
    const password = form.querySelector("input[type='password']").value;

    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            window.location.href = "homepage.html"; // make sure filename matches
        } else {
            alert("Invalid username or password");
        }
    })
    .catch(err => console.error(err));

// LOGOUT
const logoutBtn = document.querySelector(".btnLogout-popup");

if (logoutBtn) { 
    logoutBtn.addEventListener("click", () => {
        alert("You have been logged out.");
        window.location.href = "index.html";
    });
}
});
