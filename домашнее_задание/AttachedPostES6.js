"use strict";

class AttachedPostES6 extends PostES6{
    constructor(author, text) {
        super(author, text);
        this.highlighted = false;
    }

    makeTextHighlighted(isHighlighted) {
        this.highlighted = isHighlighted;
    }

    printData() {
        super.printData();
        console.log(`${this.highlighted}`);
    }
}