'use strict';

const basketElement = document.querySelector(".basket");
const totalProductsElement = document.querySelector("#totalProducts");
const totalProductsPrice = document.querySelector(".basketTotalValue");
document.querySelector(".cartIconWrap").addEventListener("click", () => {
    basketElement.classList.toggle("hidden");
});

const cart = new Cart();
const basketContent = document.querySelector("#basketContent");

document.querySelector(".featuredItems").addEventListener("click", event => {
    const target = event.target;
    if (!target.classList.contains('addToCart')) {
        return;
    }
    const parent = target.closest('.featuredItem');
    cart.addProduct(new Product(parent.dataset.id, parent.dataset.name, parent.dataset.price));
    updateTotalProductCount();
    updateTotalProductsPrice();
    updateCartPositions();
});

updateTotalProductCount();
updateTotalProductsPrice();
updateCartPositions();

function updateTotalProductCount() {
    totalProductsElement.textContent = cart.getTotalProductCount().toString();
}

function updateTotalProductsPrice() {
    totalProductsPrice.textContent = cart.getTotalProductPrice().toString();
}

function updateCartPositions() {
    basketContent.innerHTML = cart.getMarkup();
}
