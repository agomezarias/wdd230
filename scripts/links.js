const baseURL = "https://agomezarias.github.io/wdd230/";

const linksURL = "https://agomezarias.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    const card = document.querySelector('.card');
    const ul = document.createElement('ul');

    // Create list items for the weeks
    weeks.forEach((weekData) => {
        let liWeek = document.createElement('li');
        let week = document.createElement('p');


        week.textContent = `${weekData.week}: `;

        weekData.links.forEach((link) => {
            const aLink = document.createElement('a');
            aLink.href = link.url;
            aLink.textContent = link.title;
            aLink.target = '_blank';
            week.appendChild(document.createTextNode(' | '));
            week.appendChild(aLink);
        });

        liWeek.appendChild(week);
        ul.appendChild(liWeek);
    });

    card.appendChild(ul);
};