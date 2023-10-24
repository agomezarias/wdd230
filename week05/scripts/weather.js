const currenTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDes = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=4dea49213387a34d81cc28f7432e6b7b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();


function displayResults(data) {
    currenTemp.innerHTML = '${data.main.temp}&degree;F';
    const inconSrc = 'https://openweathermap.org/img/w/${weather[0]}.icon';
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', inconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDes.textContent = '${desc}';
}