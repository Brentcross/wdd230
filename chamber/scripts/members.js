document.addEventListener('DOMContentLoaded', function () {
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));

    document.getElementById('gridView').addEventListener('click', () => {
        document.getElementById('members').classList.add('grid-view');
        document.getElementById('members').classList.remove('list-view');
    });

    document.getElementById('listView').addEventListener('click', () => {
        document.getElementById('members').classList.add('list-view');
        document.getElementById('members').classList.remove('grid-view');
    });
});

function displayMembers(members) {
    const membersContainer = document.getElementById('members');
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div>
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `;

        membersContainer.appendChild(memberCard);
    });
}
