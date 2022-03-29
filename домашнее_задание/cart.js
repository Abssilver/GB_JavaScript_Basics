'use strict';

class Cart{
    #positions;
    constructor() {
        this.#positions = {};
    }

    addProduct(product) {
        if (this.#positions[product.id] !== undefined) {
            this.#positions[product.id]["count"]++;
            return;
        }
        this.#positions[product.id] = { id: product.id, name: product.name, price: product.price, count: 1 }
    }

    getTotalProductPrice() {
        return Object.values(this.#positions).reduce((sum, current) =>
            sum + (current["count"] ?? 0) * (current["price"] ?? 0) , 0);
    }

    getTotalProductCount() {
        return Object.values(this.#positions).reduce((sum, current) => sum + (current["count"] ?? 0) , 0);
    }

    getMarkup() {
        return Object.values(this.#positions).map(position => Cart.#getPositionMarkup(position)).join("");
    }
    
    static #getPositionMarkup(position) {
        return `
        <div class="basketRow">
            <div>${position["name"]}</div>
            <div>${position["count"]} шт.</div>
            <div>$${position["price"]}</div>
            <div>$${position["price"] * position["count"]}</div>
        </div>
      `;
    }
}
