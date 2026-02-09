const loginBtn = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.icon-close');
const form = document.querySelector('.login form');

loginBtn.addEventListener('click', () => {
    wrapper.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

wrapper.addEventListener('click', (e) => {
    if (e.target === wrapper) {
        wrapper.classList.remove('active');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "homepage.html";
    } else {
        alert("Invalid username or password");
    }
});