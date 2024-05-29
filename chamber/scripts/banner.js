document.addEventListener('DOMContentLoaded', function () {
    const daysToShowBanner = ['Monday', 'Tuesday', 'Wednesday'];
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    if (daysToShowBanner.includes(today)) {
        const banner = document.createElement('div');
        banner.id = 'meetGreetBanner';
        banner.innerHTML = `
            <p>Join us for a meet and greet on Wednesday at 7:00 p.m.</p>
            <button onclick="document.getElementById('meetGreetBanner').style.display='none'">❌</button>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
    }
});

