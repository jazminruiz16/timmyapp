const form = document.querySelector("#form");
const filledform = document.getElementById('filledform');
const params = new URLSearchParams(window.location.search);
const color = params.get('colorpost');
const sizepost = params.get('sizepost');
const coatpost = params.get('coatpost');
const emailpost = params.get('emailpost');
const phonepost = params.get('phonepost');


const listData = document.createElement("div");
listData.innerHTML = `<p>Color: ${color}</p><p>Size: ${sizepost}</p><p>Coat Type: ${coatpost}</p><p>Email: ${emailpost}</p><p>Phone: ${phonepost}</p>`;
filledform.appendChild(listData);
listData.classList.add("centerbox");

/*const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const header = document.querySelector('header');
const listPhotos = document.getElementById('listPhotos');


button.addEventListener("click", function () {
    menu.classList.toggle('open');
    if (button.innerHTML === '☰') {
        button.textContent = '❌';
        header.style.height = '300px';

    }
    else {
        button.textContent = '☰';
        header.style.height = '150px';

    }

});*/


