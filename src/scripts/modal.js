const modal1 = document.querySelector('#myModal');
const closeModal = document.querySelector('#closeModal1');
modal1.showModal();

const date2 = new Date();
const month = date2.getMonth();
let season = "Winter";
let imageseason = "images/winter.svg";
let harvest = "";
if (month >= 8 && month < 11) {
    season = "Spring";
    imageseason = "images/flower.svg";
    harvest = "sproud salad, beans, lettuce, spinach";
}
else if (month == 11 || (month >= 0 && month < 2)) {
    season = "Summer";
    imageseason = "images/sun.svg";
    harvest = "strawberries";
}
else if (month >= 2 && month < 5) {
    season = "Autumn";
    imageseason = "images/autumn.svg";
    harvest = "oca, cañahua, potatoes.";
}
else {
    season = "Winter";
    imageseason = "images/winter.svg";
    harvest = "chinesse chard, dried fruits";
}
const listItem = document.createElement("div");
listItem.innerHTML = `<img src="${imageseason}" alt="image season" width=150 loading = "lazy" > <p>Organic farming is seasonal because it is related to the cycles of nature and the rhythms of the earth. In <span class="bigfont">${season}</span> we have discount in our seasonal harvest: <span class="bigfont">${harvest}</span>. </p>`;
modal1.appendChild(listItem);

closeModal.addEventListener('click', () => {
    modal1.close();
});