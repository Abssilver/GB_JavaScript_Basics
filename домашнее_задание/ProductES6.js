"use strict";

class ProductES6{
    constructor(productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
    }

    make25Discount() {
        this.productPrice *= 0.75;
    }

    printData() {
        console.log(`${this.productName} ${this.productPrice}`);
    }
}