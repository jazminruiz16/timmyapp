
import {ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "./firebase-config.js";
export function UploadPetProfile() {
    const btn_photo = document.querySelector('#btn-photo');
    const image = document.querySelector('#pet-photo');
    let widget_cloudinary = cloudinary.createUploadWidget({
        cloudName: 'dpmq0o5st',
        uploadPreset: 'preset_timmy',
    }, (err, result) => {
        if (!err && result && result.event === 'success') {
            console.log('Success upload', result.info);
            image.src = result.info.secure_url;
        }
    });
    btn_photo.addEventListener('click', () => {
        widget_cloudinary.open();
    }, false);
    

    const petsRef = ref(db, "petspost");
    
    // Save data
    const buttonpost = document.getElementById("buttonpost");
    buttonpost.addEventListener("click",function () {
        const colorpost = document.getElementById("colorpost").value;
        const sizepost = document.getElementById("sizepost").value;
        const coatpost = document.getElementById("coatpost").value;
        const locationpost = document.getElementById("locationpost").value;
        const emailpost = document.getElementById("emailpost").value;
        const phonepost = document.getElementById("phonepost").value;
        const otherdescription = document.getElementById("otherdescription").value;
        const imagepet = image.src;

        push(petsRef, {
            colorpost: colorpost,
            sizepost: sizepost,
            coatpost: coatpost,
            locationpost: locationpost,
            emailpost: emailpost,
            phonepost: phonepost,
            otherdescription: otherdescription,
            imagepet: imagepet,
            status: 'lost'

        });
    })

}
