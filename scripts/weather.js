const weather = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
/*const date = new Date();
const month = date.getMonth();*/
const myURL = "https://api.openweathermap.org/data/2.5/weather?lat=-16.50&lon=-68.13&appid=5562c17f0bed0ff43cdc29aab205c9a6&units=metric";
const apiFetch = async () => {
    weather.innerHTML = '';
    try {
        const response = await fetch(myURL); // Wait for the fetch to complete https://openweathermap.org/img/wn/' + data.weather.icon + '@2x.png
        const data = await response.json(); // Wait for the response to be converted to JSON https://openweathermap.org/img/wn/10d@2x.png
        // Output the fetched data
        const date = new Date();
        const month = date.getMonth();
        let season = "Winter";
        let imageseason = "images/winter.svg";
        if (month >= 8 && month < 11) {
            season = "Spring";
            imageseason = "images/flower.svg";

        }
        else if (month == 11 || (month >= 0 && month < 2)) {
            season = "Summer";
            imageseason = "images/sun.svg";
        }
        else if (month >= 2 && month < 5) {
            season = "Autumn";
            imageseason = "images/autumn.svg";
        }
        else {
            season = "Winter";
            imageseason = "images/winter.svg";
        }
        const listItem = document.createElement("div");
        listItem.innerHTML = '<figure><img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png" alt="' + data.weather[0].description + '" width=150 loading="lazy"><figcaption><span class="titlePhoto">Curret Weather</span><br>Temperature: ' + data.main.temp + ' ºC<br>' + data.weather[0].description + '<br>High: ' + data.main.temp_max + ' ºC<br>Low: ' + data.main.temp_min + ' ºC<br>Humidity: ' + data.main.humidity + '%<br>Sunrise: ' + data.sys.sunrise + 'am<br>Sunset: ' + data.sys.sunset + ' pm</figcaption></figure><figure><img src="' + imageseason + '" alt="image season" width=150 loading="lazy"><figcaption><span class="titlePhoto">' + season + '</span><br>Organic farming is seasonal because it is related to the cycles of nature and the rhythms of the earth.</figcaption></figure>';
        weather.appendChild(listItem);
        /*const listItem = document.createElement("div");
        listItem.innerHTML = '<figure><img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png" alt="' + data.weather[0].description + '" width=150 loading="lazy"><figcaption><span class="titlePhoto">Curret Weather</span><br>Temperature: ' + data.main.temp + ' ºC<br>' + data.weather[0].description + '<br>High: ' + data.main.temp_max + ' ºC<br>Low: ' + data.main.temp_min + ' ºC<br>Humidity: ' + data.main.humidity + '%<br>Sunrise: ' + data.sys.sunrise + 'am<br>Sunset: ' + data.sys.sunset + ' pm</figcaption></figure>';
        weather.appendChild(listItem);*/

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
apiFetch();