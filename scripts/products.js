console.dir(document);
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;

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

const products = [
    {
        productName: "Celery",
        characteristics: "vegetable",
        benefits: "Low in calories, rich in nutrients like dietary fiber, Vitamin K, and small amounts of Vitamins A and C, calcium, and iron. Contains antioxidant properties, which may help reduce the risk of some chronic conditions. Made up of almost 95% water, aiding in hydration.",
        recipes: "https://itsavegworldafterall.com/pickled-celery/",
        image:"celery"
    },
    {
        productName: "Arugula",
        characteristics: "vegetable",
        benefits: "Rich in Vitamin A, Vitamin C, and phenolic compounds with antioxidant and anti-inflammatory properties. May help promote weight loss, regulate blood sugar levels, control high blood pressure, and contributes to cardiovascular, eye, and bone health.",
        recipes: "https://www.101cookbooks.com/ingredient/arugula",
        image: "arugula"
        
    },
    {
        productName: "Chinesse chard",
        characteristics: "vegetable",
        benefits: "Packed with antioxidants and high levels of Vitamins K, A, and C, magnesium, potassium, iron, and fiber. Known to decrease the risk of obesity, diabetes, and heart disease. Can help maintain bone health, improve digestion, and regulate blood sugar levels.",
        recipes: "https://san-j.com/recipes/swiss-chard-with-garlic-lemon-and-tamari/",
        image: "chinesseChard"
    },
    {
        productName: "Spinach",
        characteristics: "vegetable",
        benefits: "May help improve blood glucose control in people with diabetes. May lower the risk of cancer (contains chlorophyll and various antioxidants). Improves bone health (significant source of Vitamin K and calcium). Helps lower blood pressure. Beneficial for eye health and may minimize the risk of anemia.",
        recipes: "https://www.allrecipes.com/recipe/161688/quick-and-easy-sauteed-spinach/",
        image: "spinach"
    },
    {
        productName: "Red cabbage",
        characteristics: "vegetable",
        benefits: "Rich in nutrients like Vitamin C, Vitamin K, and fiber. Boasts powerful plant compounds, especially high levels of anthocyanins and sulforaphane. Helps fight inflammation and may reduce the risk of certain cancers. Promotes gut health and boosts heart health.",
        recipes: "https://www.allrecipes.com/recipe/234360/chef-johns-braised-red-cabbage/",
        image: "redCabbage"
    },
    {
        productName: "Cilantro",
        characteristics: "vegetable",
        benefits: "Contains essential oils and flavanols with antioxidant and anti-inflammatory properties. Studies demonstrate it may help lower high cholesterol and blood pressure. Leaves are rich in folate and Vitamin K. Contains Vitamin C, beta-carotene, lutein, and zeaxanthin.",
        recipes: "https://www.101cookbooks.com/ingredient/cilantro",
        image: "cilantro"
    },
    {
        productName: "Onion",
        characteristics: "vegetable",
        benefits: "Rich in antioxidants (especially quercetin), which may reduce the risk of heart disease, fight inflammation, and are linked to anti-cancer properties. May help reduce cholesterol and boost insulin production. High in prebiotics and fiber to support digestive and gut health. May support bone health.",
        recipes: "https://www.onions-usa.org/recipes/",
        image: "onion"
    },
    {
        productName: "Broccoli",
        characteristics: "vegetable",
        benefits: "Exhibits various biological activities, including antioxidant, anticancer, antimicrobial, anti-inflammatory, anti-obesity, and antidiabetic effects. Rich source of glucosinolates and phenolic compounds. Supports heart health. Aids in digestion and weight management. Boosts bone health and immune system.",
        recipes: "https://www.101cookbooks.com/potato-chowder-miso-broth/",
        image: "broccoli"
    },
    {
        productName: "Bean",
        characteristics: "vegetable",
        benefits: "Rich in potassium, magnesium, folate, iron, and zinc. Important sources of protein and high in total and soluble fiber as well as resistant starch, contributing to a low glycemic index. Suggested to reduce LDL cholesterol and the risk of ischemic heart disease and diabetes.",
        recipes: "https://www.101cookbooks.com/ingredient/bean",
        image: "bean"
    },
    {
        productName: "White broccoli",
        characteristics: "vegetable",
        benefits: "Benefits are generally consistent with Broccoli. Exhibits various biological activities, including antioxidant, anticancer, antimicrobial, anti-inflammatory, anti-obesity, and antidiabetic effects. Rich source of glucosinolates and phenolic compounds.",
        recipes: "https://mayuris-jikoni.com/2012/03/10/22-baked-broccoli/",
        image: "whiteBroccoli"
    },
    {
        productName: "Lettuce",
        characteristics: "vegetable",
        benefits: "High in water and low in calories. Excellent source of vitamins, minerals, and bioactive compounds. Compounds have been linked to antidiabetic, antimicrobial, anti-inflammatory, anticancer, and antiviral activities. Associated with a lower risk of chronic diseases.",
        recipes: "https://www.thegourmetreview.com/bibb-lettuce-salad-salade-de-laitue/",
        image: "lettuce"
    },
    {
        productName: "Eggs",
        characteristics: "vegetable",
        benefits: "Rich source of high-quality protein, Vitamin D, essential amino acids, and omega-3 fatty acids. Regular consumption may support muscle growth, brain function, and eye health (due to antioxidants like lutein and zeaxanthin).",
        recipes: "https://eggs.ca/",
        image: "eggs"
    },
    {
        productName: "Mushrooms",
        characteristics: "vegetable",
        benefits: "Exhibits a broad spectrum of pharmacological activities, including antiallergic, antibacterial, antifungal, anti-inflammatory, antioxidative, antiviral, cytotoxic, and immunomodulating effects. Contain important bioactive compounds like polysaccharides and proteins.",
        recipes: "https://www.allrecipes.com/recipe/222795/superb-sauteed-mushrooms/",
        image: "mushrooms"
    },
    {
        productName: "Hand cream",
        characteristics: "personal care",
        benefits: "Our cream will leave your hands soft and moisturized.Its ingredients are organic and cruelty-free.",
        recipes: "",
        image: "cream"
    },
    {
        productName: "Aromatherapy oil",
        characteristics: "personal care",
        benefits: "Essential oils relax the mind.They have anti- inflammatory properties and are good for the skin.",
        recipes: "",
        image: "oil"
    },

    // Add more product objects here... 
];

const vegetablesLink = document.getElementById('vegetables');
const careLink = document.getElementById('care');
const productLink = document.getElementById('products');


vegetablesLink.addEventListener("click", function () {
    let old = products.filter(product => {
        const characteristic = product.characteristics;
        return characteristic =="vegetable";
    });
    listPhotos.innerHTML = '';
    old.forEach(product => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = `<figcaption><span class="titlePhoto"> ${product.productName}</span><br>Benefits: ${product.benefits}<br>Characteristics: ${product.characteristics} </figcaption><a class="linkBox" href="${product.recipes}">Recipes</a><img src="images/${product.image}.webp" alt="${product.productName}" loading="lazy">`;
        listPhotos.appendChild(listItem);
    });
});
careLink.addEventListener("click", function () {
    let newest = products.filter(product => {
        const characteristic = product.characteristics;
        return characteristic =="personal care";
    });
    listPhotos.innerHTML = '';
    newest.forEach(product => {
        const listItem = document.createElement("figure");
        listItem.innerHTML = `<figcaption><span class="titlePhoto"> ${product.productName}</span><br>Benefits: ${product.benefits}<br>Characteristics: ${product.characteristics} </figcaption><img src="images/${product.image}.webp" alt="${product.productName}" loading="lazy">`; 
        listPhotos.appendChild(listItem);
    });
});
productLink.addEventListener("click", function () {
    listPhotos.innerHTML = '';
    products.forEach(product => {
        const listItem = document.createElement("figure");
        if (product.characteristics == "vegetable") {
            listItem.innerHTML = `<figcaption><span class="titlePhoto"> ${product.productName}</span><br>Benefits: ${product.benefits}<br>Characteristics: ${product.characteristics} </figcaption><a class="linkBox" href="${product.recipes}">Recipes</a><img src="images/${product.image}.webp" alt="${product.productName}" loading="lazy">`;

        } else {
            listItem.innerHTML = `<figcaption><span class="titlePhoto"> ${product.productName}</span><br>Benefits: ${product.benefits}<br>Characteristics: ${product.characteristics} </figcaption><img src="images/${product.image}.webp" alt="${product.productName}" loading="lazy">`;
        }
        listPhotos.appendChild(listItem);
    });
});
const figureproduct = products.map((product) => {
    const listItem = document.createElement("figure");
    if (product.characteristics =="vegetable") {
        listItem.innerHTML = `<figcaption><span class="titlePhoto"> ${product.productName}</span><br>Benefits: ${product.benefits}<br>Characteristics: ${product.characteristics} </figcaption><a class="linkBox" href="${product.recipes}">Recipes</a><img src="images/${product.image}.webp" alt="${product.productName}" loading="lazy">`; 

    } else {
        listItem.innerHTML = `<figcaption><span class="titlePhoto"> ${product.productName}</span><br>Benefits: ${product.benefits}<br>Characteristics: ${product.characteristics} </figcaption><img src="images/${product.image}.webp" alt="${product.productName}" loading="lazy">`; 
    }
    listPhotos.appendChild(listItem);
});
