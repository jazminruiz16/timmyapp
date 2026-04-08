const searchpet = document.querySelector('#searchpet');
const searchpetIcon = document.querySelector('#searchpet-icon');
const captionDesc = document.querySelector('figcaption');

const myURL = "https://timmy-d4896-default-rtdb.firebaseio.com/";
const apiFetch = async () => {
    searchpet.innerHTML = '';
    try {
        const response = await fetch(myURL); // Wait for the fetch to complete https://opensearchpetmap.org/img/wn/' + data.searchpet.icon + '@2x.png
        const data = await response.json(); // Wait for the response to be converted to JSON https://opensearchpetmap.org/img/wn/10d@2x.png
        // Output the fetched data
        
        const listItem = document.createElement("div");
        listItem.innerHTML = '<figure><img src="https://opensearchpetmap.org/img/wn/' + data.searchpet[0].icon + '@2x.png" alt="' + data.searchpet[0].description + '" width=150 loading="lazy"><figcaption><span class="titlePhoto">Curret searchpet</span><br>Temperature: ' + data.main.temp + ' ºC<br>' + data.searchpet[0].description + '<br>High: ' + data.main.temp_max + ' ºC<br>Low: ' + data.main.temp_min + ' ºC<br>Humidity: ' + data.main.humidity + '%<br>Sunrise: ' + data.sys.sunrise + 'am<br>Sunset: ' + data.sys.sunset + ' pm</figcaption></figure><figure><img src="' + imageseason + '" alt="image season" width=150 loading="lazy"><figcaption><span class="titlePhoto">' + season + '</span><br>Organic farming is seasonal because it is related to the cycles of nature and the rhythms of the earth.</figcaption></figure>';
        searchpet.appendChild(listItem);


    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};
apiFetch();