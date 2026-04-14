let searchpet = document.querySelector('#searchpet');
const searchpetIcon = document.querySelector('#searchpet-icon');
const captionDesc = document.querySelector('figcaption');

import { ref, push, onValue, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "./firebase-config.js";
const petsRef = ref(db);
console.log(petsRef);
const input = document.getElementById("email");


/*<figure><img src="https://opensearchpetmap.org/img/wn/' + data.searchpet[0].icon + '@2x.png" alt="' + data.searchpet[0].description + '" width=150 loading="lazy"><figcaption><span class="titlePhoto">Curret searchpet</span><br>Temperature: ' + data.main.temp + ' ºC<br>' + data.searchpet[0].description + '<br>High: ' + data.main.temp_max + ' ºC<br>Low: ' + data.main.temp_min + ' ºC<br>Humidity: ' + data.main.humidity + '%<br>Sunrise: ' + data.sys.sunrise + 'am<br>Sunset: ' + data.sys.sunset + ' pm</figcaption></figure><figure><img src="' + imageseason + '" alt="image season" width=150 loading="lazy"><figcaption><span class="titlePhoto">' + season + '</span><br>Organic farming is seasonal because it is related to the cycles of nature and the rhythms of the earth.</figcaption></figure>*/
const buttonsearch = document.getElementById("buttonsearch");
buttonsearch.addEventListener("click", function () {
    searchpet.innerHTML = "";
    const email = input.value;
    console.log(email);
    get(child(petsRef, 'petspost'))
        .then((result) => {
            const pestslist = Object.values(result.val());
            console.log(pestslist);
        
            const filterC = pestslist.filter(pet => pet.emailpost === email && pet.status === "lost");

            console.log(filterC);

            
            let n = 0;
            filterC.forEach(pet => {
                n = n + 1;
                const listItem = document.createElement("div");
                listItem.innerHTML = `<p id="coat${n}">${pet.coatpost}</p><p id="color${n}">${pet.colorpost}</p><p id="location${n}">${pet.locationpost}</p><p id="size${n}">${pet.sizepost}</p><img src="${pet.imagepet}" alt="my pet" loading="lazy"><button id="${n}" class="linkBox" >Search</button>`;
                searchpet.appendChild(listItem);
                let button = listItem.querySelector('button')
                button.addEventListener("click", function () {
                    /*const number = btn.id;
                    console.log(number);
                    const coat = document.getElementById("coat" + { number });
                    console.log(coat.innerHTML);*/
                    const coat = pet.coatpost;
                    const color = pet.colorpost;
                    const location = pet.locationpost;
                    const size = pet.sizepost;
                    console.log(coat + " " + color);
                    console.log(pestslist);
                    const filterpets = pestslist.filter(pet => pet.status==="found" && (pet.coatpost === coat || pet.colorpost === color));
                    console.log(filterpets);
                    filterpets.forEach(petreport => {
                        const listPet = document.createElement("div");
                        listPet.innerHTML = `<title>Found</title><p>Coat: ${petreport.coatpost}<br>Color: ${petreport.colorpost}</p><p>Size: ${petreport.sizepost}<br>Other description: ${petreport.otherdescription}</p><img src="${petreport.imagepet}" alt="a pet" loading="lazy"><a href="${petreport.locationpost}">Location</a>`;
                        searchpet.appendChild(listPet);
                        
                    });
                    
                })
            });
            
         // Si la promesa fue exitosa -> imprime: "Operation was successful!" añadir un if no hay datos encontrados

    })
    .catch((error) => {
        console.error(error);
        // Si la promesa falló -> imprime: "Operation failed."
    });

    
})

