const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data.prophets); // Temporary testing of data retrieval
        displayProphets(data.prophets); // Note that we reference the prophets array of the JSON data object, not just the object
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Create an h2 element
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p'); // Create a paragraph for the birthdate
        let birthplace = document.createElement('p'); // Create a paragraph for the birthplace

        // Add classes to the elements
        card.classList.add('card');
        fullName.classList.add('card-title');
        portrait.classList.add('card-image');
        birthdate.classList.add('card-info');
        birthplace.classList.add('card-info');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name}`; // Correctly referencing the full name

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`); // Alt text for the image
        portrait.setAttribute('loading', 'lazy'); // Lazy load the image
        portrait.setAttribute('width', '340'); // Set the width attribute
        portrait.setAttribute('height', '440'); // Set the height attribute

        // Set the birthdate and birthplace
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`; // Correctly referencing the birthdate
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`; // Correctly referencing the birthplace

        // Append the section(card) with the created elements
        card.appendChild(fullName); // Add the h2 element to the card
        card.appendChild(portrait); // Add the img element to the card
        card.appendChild(birthdate); // Add the birthdate paragraph to the card
        card.appendChild(birthplace); // Add the birthplace paragraph to the card

        cards.appendChild(card); // Add the card to the div#cards
    }); // End of arrow function and forEach loop
}
