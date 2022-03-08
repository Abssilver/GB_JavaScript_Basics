"use strict";

function ProductES5(productName, productPrice) {
    this.productName = productName;
    this.productPrice = productPrice;
}

ProductES5.prototype.make25Discount = function () {
    this.productPrice *= 0.75;
};

ProductES5.prototype.printData = function () {
    console.log(`${this.productName} ${this.productPrice}`);
};