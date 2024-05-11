document.addEventListener("DOMContentLoaded", function() {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = currentTime - lastVisit;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (timeDifference < (1000 * 60 * 60 * 24)) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentTime);
});
