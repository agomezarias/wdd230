// Function to format a date as "Day dd/mm/yyyy hh:mm CST"
function formatLastModified(date) {
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short'
    };

    return date.toLocaleString('en-US', options);
}

// Get current date and format
const currentDate = new Date();
const lastModified = formatLastModified(currentDate);

// Display the formatted "last modified" date
document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;






// Function to get the current date to ISO format
function getCurrentDate() {
    return new Date().toISOString();
}

// Function to update the visit message
function updateVisitMessage() {
    // Get the last visit date from localStorage
    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        // Calculate the time difference between the last visit and now
        const currentDate = new Date();
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            // Less than a day has passed??
            document.getElementById('visit-message').textContent = "Back so soon! Awesome!";
        } else {
            // More than a day has passed??
            const plural = daysDifference === 1 ? 'day' : 'days';
            document.getElementById('visit-message').textContent = `You last visited ${daysDifference} ${plural} ago.`;
        }
    }

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', getCurrentDate());
}

// Call updateVisitMessage function
updateVisitMessage();