import { UploadPetProfile } from "./uploadPetProfile.js";
import { UploadReport } from "./uploadReport.js";
UploadPetProfile();
UploadReport();
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