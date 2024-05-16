document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

function updateRatingValue(value) {
    document.getElementById('ratingValue').textContent = value;
}

function checkPasswords(event) {
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm_password');
    if (password.value !== confirm_password.value) {
        alert('Passwords do not match.');
        password.value = '';
        confirm_password.value = '';
        password.focus();
        event.preventDefault();
    }
}

document.querySelector('form').addEventListener('submit', checkPasswords);
