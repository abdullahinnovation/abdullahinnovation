
// Product Data
const products = [
    {
        name: "Air Max Red",
        category: "Running",
        price: 8500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        name: "Classic White",
        category: "Casual",
        price: 6500,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },
    {
        name: "Sport Runner",
        category: "Sports",
        price: 7500,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500"
    },
    {
        name: "Street Sneaker",
        category: "Casual",
        price: 5500,
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500"
    },
    {
        name: "Power Run",
        category: "Running",
        price: 9200,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500"
    },
    {
        name: "Urban Sport",
        category: "Sports",
        price: 7000,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
    },
    {
        name: "Daily Comfort",
        category: "Casual",
        price: 4800,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
    },
    {
        name: "Speed Pro",
        category: "Running",
        price: 10500,
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500"
    }
];

// Display Products
const productGrid = document.getElementById("productGrid");

function displayProducts(category = "All") {

    const filtered = category === "All"
        ? products
        : products.filter(product => product.category === category);

    productGrid.innerHTML = filtered.map((product, index) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <p class="category">${product.category}</p>
            <h3>${product.name}</h3>

            <div class="product-bottom">
                <span class="price">Rs. ${product.price.toLocaleString()}</span>
                <button class="add-btn" data-index="${index}">
                    + Add
                </button>
            </div>
        </div>
    `).join("");
}

displayProducts();

// Category Filter
document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter.active")
            .classList.remove("active");

        button.classList.add("active");

        displayProducts(button.dataset.category);
    });

});

// Shopping Cart Counter
let cartCount = 0;

productGrid.addEventListener("click", event => {

    const button = event.target.closest(".add-btn");

    if (!button) return;

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    button.textContent = "Added ✓";

    setTimeout(() => {
        button.textContent = "+ Add";
    }, 1000);
});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Winter Countdown (7 days)
let endDate = Date.now() + 7 * 24 * 60 * 60 * 1000;

function updateCountdown() {

    let distance = endDate - Date.now();

    if (distance <= 0) {
        document.getElementById("countdown").textContent = "OFFER ENDED";
        clearInterval(timerInterval);
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((distance / (1000 * 60)) % 60);
    let seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("countdown").textContent =
        `${days} : ${hours} : ${minutes} : ${seconds}`;
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);

// Newsletter
document.getElementById("newsletterForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        alert("Thank you for subscribing!");

        event.target.reset();
    });
