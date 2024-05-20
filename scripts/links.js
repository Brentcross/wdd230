const baseURL = "https://brentcross.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.weeks);
    } else {
        throw Error(await response.text());
    }
}

function displayLinks(weeks) {
    const container = document.querySelector('.card-container .card ul');
    container.innerHTML = ''; 

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week + ': ';
        
        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            weekItem.appendChild(linkElement);
            weekItem.appendChild(document.createTextNode(' | '));
        });

        weekItem.lastChild.remove();
        container.appendChild(weekItem);
    });
}

getLinks();
