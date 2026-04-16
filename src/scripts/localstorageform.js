const visitsDisplay = document.getElementById("counter");
const firstvisit = document.getElementById("first");
const lastvisit = document.getElementById("last");
const date = new Date();
const today = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const todaystring = today + "/" + month + "/" + year;
console.log("today:"+todaystring);
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let firstvisitdate = String(window.localStorage.getItem("first")) || todaystring;
let lastvisitdate = String(window.localStorage.getItem("last")) || todaystring;
firstvisit.textContent = firstvisitdate;
lastvisit.textContent = lastvisitdate;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
   
    
} else {
    visitsDisplay.textContent = `First form filled.`;
    localStorage.setItem("first", todaystring);  
}



numVisits++;
localStorage.setItem("last", todaystring);
localStorage.setItem("numVisits-ls", numVisits);
