const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

// Toggle forms
showSignup.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
});

showLogin.addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

// Login submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Login with\nEmail: ${email}\nPassword: ${password}`);
});

// Signup submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    alert(`Signup with\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
});