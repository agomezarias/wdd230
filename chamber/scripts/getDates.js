// Function to format a date as "Day dd/mm/yyyy hh:mm CST"
function formatLastModified(date) {
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    };

    return date.toLocaleString('en-US', options);
}

// Get current date and format
const currentDate = new Date();
const lastModified = formatLastModified(currentDate);

// Display the formatted "last modified" date
document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;