/*-	UploadPetProfile: The user can upload a description of her pet and a photo.
-	SelectByMunicipality: When a user wants to report a found pet, he can search if there is a similar pet reported as lost. In order to avoid big data with pets with similar descriptions that are far away from the reporting location.
-	Reports: If a lost pet will have a report, the information will appear in a page linked to the main page.
-	SearchPet: The owner who has lost his pet can search for it by its id.
-	InformationPets: The users can get information about dog breeds
-	UploadReport: The user can upload a report of a found pet.
-	OptionstoDescribe: The user can obtain options in order to describe the found pet.
-	SearchFoundPet: The user can search for the found pet among the pets reported as lost by the description and see their photos in order to compare.
*/
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
