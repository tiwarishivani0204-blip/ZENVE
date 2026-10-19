const products = [
    { name: "Luxury Leather Jacket", price: "₹8,999" },
    { name: "Designer Sneakers", price: "₹6,499" },
    { name: "Classic Watch", price: "₹12,999" },
    { name: "Premium Sunglasses", price: "₹4,299" },
    { name: "Elegant Handbag", price: "₹7,899" },
    { name: "Luxury Perfume", price: "₹5,999" }
];

const container = document.getElementById("products");

products.forEach(item => {
    container.innerHTML += `
        <div class="product-card">
            <div class="product-img"></div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button>Add to Bag</button>
        </div>
    `;
});
