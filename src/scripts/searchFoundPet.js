const searchpet = document.querySelector('#searchpet');
const searchpetIcon = document.querySelector('#searchpet-icon');
const captionDesc = document.querySelector('figcaption');

import { ref, push, onValue, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "./firebase-config.js";
const petsRef = ref(db);
console.log(petsRef);


/*<figure><img src="https://opensearchpetmap.org/img/wn/' + data.searchpet[0].icon + '@2x.png" alt="' + data.searchpet[0].description + '" width=150 loading="lazy"><figcaption><span class="titlePhoto">Curret searchpet</span><br>Temperature: ' + data.main.temp + ' ºC<br>' + data.searchpet[0].description + '<br>High: ' + data.main.temp_max + ' ºC<br>Low: ' + data.main.temp_min + ' ºC<br>Humidity: ' + data.main.humidity + '%<br>Sunrise: ' + data.sys.sunrise + 'am<br>Sunset: ' + data.sys.sunset + ' pm</figcaption></figure><figure><img src="' + imageseason + '" alt="image season" width=150 loading="lazy"><figcaption><span class="titlePhoto">' + season + '</span><br>Organic farming is seasonal because it is related to the cycles of nature and the rhythms of the earth.</figcaption></figure>*/
const buttonsearch = document.getElementById("buttonsearch");
buttonsearch.addEventListener("click", function () {
    get(child(petsRef, 'petspost'))
    .then((result) => {
        console.log(result.val());
        // Si la promesa fue exitosa -> imprime: "Operation was successful!" añadir un if no hay datos encontrados
    })
    .catch((error) => {
        console.error(error);
        // Si la promesa falló -> imprime: "Operation failed."
    });

    /*const mimascota = petsRef.OpeszNreLuBVjvPrlxJ.coatpost;
    listItem.innerHTML = '<p>' + mimascota + '</p>';
    searchpet.appendChild(listItem);*/
    /*const colorpost = document.getElementById("colorpost").value;
    const sizepost = document.getElementById("sizepost").value;
    const coatpost = document.getElementById("coatpost").value;
    const locationpost = document.getElementById("locationpost").value;
    const emailpost = document.getElementById("emailpost").value;
    const phonepost = document.getElementById("phonepost").value;
    const otherdescription = document.getElementById("otherdescription").value;
    const imagepet = image.src;*/
    /*const misperritos = getDocs(collection(db, "petspost"));
    console.log(misperritos);*/



    
})