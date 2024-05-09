document.addEventListener('DOMContentLoaded', function() {
    const visitsDisplay = document.querySelector(".visits");
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if (numVisits !== 0) {
        visitsDisplay.textContent = `Number of visits: ${numVisits}`;
    } else {
        visitsDisplay.textContent = `Welcome to your first visit!`;
    }

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
});