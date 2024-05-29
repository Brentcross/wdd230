document.addEventListener('DOMContentLoaded', function () {
    fetch('data/members.json') 
        .then(response => response.json())
        .then(data => {
            const qualifiedMembers = data.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
            const randomMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
            const spotlightElement = document.getElementById('spotlight');

            spotlightElement.innerHTML = `
                <h3>Business Spotlight</h3>
                ${randomMembers.map(member => `
                    <div class="spotlight-member">
                        <img src="${member.image}" alt="${member.name}">
                        <h4>${member.name}</h4>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    </div>
                `).join('')}
            `;
        })
        .catch(error => console.error('Error fetching member data:', error));
});