console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const header = document.querySelector('header');



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