"use strict";

class NumericObject {
    constructor(units, dozens, hundreds) {
        this.units = units;
        this.dozens = dozens;
        this.hundreds = hundreds;
    }

    printData() {
        console.log(`Количество сотен: ${this.hundreds}, десятков: ${this.dozens}, единиц: ${this.units}`);
    }
}