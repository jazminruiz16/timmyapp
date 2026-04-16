import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "./firebase-config.js";
const locationbtn = document.querySelector("#locationbtn");





export function UploadReport() {
    const btn_photoreport = document.querySelector('#btn-photoreport');
    const imagereport = document.querySelector('#photo-report');
    let widget_cloudinaryreport = cloudinary.createUploadWidget({
        cloudName: 'dpmq0o5st',
        uploadPreset: 'preset_timmy',
    }, (err, result) => {
        if (!err && result && result.event === 'success') {
            console.log('Success upload', result.info);
            imagereport.src = result.info.secure_url;
        }
    });
    btn_photoreport.addEventListener('click', () => {
        widget_cloudinaryreport.open();

    }, false);
    locationbtn.addEventListener("click", function () {
        function success(pos) {
            const crd = pos.coords;
            const latituderedn = crd.latitude;
            const latitude = latituderedn.toFixed(4);
            const longitude = crd.longitude.toFixed(4);
            document.getElementById("locationreport").value = "https://www.google.com/maps/search/?api=1&query="+latitude +","+longitude;

            console.log(latitude);
        }
        function error(err) {
            console.warn(`ERROR(${err.code}):${err.message}`);

        }
        navigator.geolocation.getCurrentPosition(success, error);

    });
    const petsRef = ref(db, "pestsreport");
    const buttonreport = document.getElementById("buttonreport");
    buttonreport.addEventListener("click", function () {
        const colorreport = document.getElementById("colorreport").value;
        const sizereport = document.getElementById("sizereport").value;
        const coatreport = document.getElementById("coatreport").value;
        const locationreport = document.getElementById("locationreport").value;
        const emailreport = document.getElementById("emailreport").value;
        const phonereport = document.getElementById("phonereport").value;
        const descriptionreport = document.getElementById("descriptionreport").value;
        const imagepetreport = imagereport.src;
        
        push(petsRef, {
            colorpost: colorreport,
            sizepost: sizereport,
            coatpost: coatreport,
            locationpost: locationreport,
            emailpost: emailreport,
            phonepost: phonereport,
            otherdescription: descriptionreport,
            imagepet: imagepetreport,
            status: 'found'

        });
    });

}


