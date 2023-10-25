const url = 'https://agomezarias.github.io/wdd230/chamber/data/members.json';

async function fetchMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        data['company-Members'].forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            card.innerHTML = `
        <h3>${member.company}</h3>
        <img src="${member.icon}" alt="${member.company} Icon">
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phoneNumber}</p>
        <p>Services: ${member.services}</p>
        <p>Membership Level: ${member.membershipLevel}</p>
        <!-- Add more member information as needed -->
      `;
            document.getElementById('cards').appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

fetchMemberData();

