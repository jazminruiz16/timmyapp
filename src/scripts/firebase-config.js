
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { UploadPetProfile } from "./uploadPetProfile.js";

const firebaseConfig = {
    apiKey: "AIzaSyCU2uEGVzrIWlVfYjv9x-bmvamW0CBuG1g",
    authDomain: "timmy-d4896.firebaseapp.com",
    databaseURL: "https://timmy-d4896-default-rtdb.firebaseio.com",
    projectId: "timmy-d4896",
    storageBucket: "timmy-d4896.firebasestorage.app",
    messagingSenderId: "491277563864",
    appId: "1:491277563864:web:ed746db68d0e8fbfa8a4ad"

};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


