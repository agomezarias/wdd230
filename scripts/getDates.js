const pattern = /last_modif\s*=\s*([^;]*)/;

const lastModifiedSpan = document.getElementById('lastModifiedValue');

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;
} else {
  lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleString(); // Display the last modified date
}