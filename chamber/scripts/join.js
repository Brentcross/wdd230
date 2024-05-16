document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.validity.valid) {
                input.style.borderColor = 'green';
            } else {
                input.style.borderColor = 'red';
            }
        });
    });

    document.getElementById('timestamp').value = new Date().toISOString();
});

