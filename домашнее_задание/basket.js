'use strict';

const basketElement = document.querySelector(".basket");
const totalProductsElement = document.querySelector("#totalProducts");
const totalProductsPrice = document.querySelector(".basketTotalValue");
document.querySelector(".cartIconWrap").addEventListener("click", () => {
    basketElement.classList.toggle("hidden");
});

const basket = {};
const basketContent = document.querySelector("#basketContent");

document.querySelector(".featuredItems").addEventListener("click", event => {
    const target = event.target;
    if (!target.classList.contains('addToCart')) {
        return;
    }
    const parent = target.closest('.featuredItem');
    addToCart(parent.dataset.id, parent.dataset.name, parent.dataset.price);
    updateTotalProductCount();
    updateTotalProductsPrice();
    updateCartPositions();
});

updateTotalProductCount();
updateTotalProductsPrice();
updateCartPositions();

function addToCart(productId, productName, productPrice) {
    if (basket[productId] !== undefined) {
        basket[productId]["count"]++;
        return;
    }
    basket[productId] = { id: productId, name: productName, price: productPrice, count: 1 };
}

function updateTotalProductCount() {
    const productCount = Object.values(basket).reduce((sum, current) => sum + (current["count"] ?? 0) , 0);
    totalProductsElement.textContent = productCount.toString();
}

function updateTotalProductsPrice() {
    const totalPrice = Object.values(basket).reduce((sum, current) => 
        sum + (current["count"] ?? 0) * (current["price"] ?? 0) , 0);
    totalProductsPrice.textContent = totalPrice.toString();
}

function updateCartPositions() {
    basketContent.innerHTML = Object.values(basket).map(product => getMarkup(product)).join("");
}

function getMarkup(product) {
    return `
        <div class="basketRow">
            <div>${product["name"]}</div>
            <div>${product["count"]} шт.</div>
            <div>$${product["price"]}</div>
            <div>$${product["price"] * product["count"]}</div>
        </div>
      `; 
}
