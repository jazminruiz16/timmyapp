const form = document.querySelector("#form");
const filledform = document.getElementById('filledform');
const params = new URLSearchParams(window.location.search);
const fname = params.get('fname');
const lname = params.get('lname');
const email = params.get('email');
const phone = params.get('phone');
const question = params.get('question');


const listData = document.createElement("div");
listData.innerHTML = `<p>First name: ${fname}</p><p>Last name: ${lname}</p><p>Email: ${email}</p><p>Mobile number: ${phone}</p>`;
filledform.appendChild(listData);
listData.classList.add("centerbox");

const button = document.getElementById('menu-button');
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

});


