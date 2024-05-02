document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent += document.lastModified;


document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.querySelector('.hamburger');
const exitButton = document.querySelector('.hamburger-exit');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    menu.style.display = 'block';
    hamburger.style.display = 'none'; 
    exitButton.style.display = 'block'; 
});

exitButton.addEventListener('click', function() {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
    exitButton.style.display = 'none';
});
});

document.addEventListener('DOMContentLoaded', function() {
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
});