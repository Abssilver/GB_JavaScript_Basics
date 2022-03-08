"use strict";

class PostES6{
    constructor(author, text) {
        this.author = author;
        this.text = text;
        this.date = new Date();
    }

    edit(text) {
        this.text = text;
        this.date = new Date();
    }

    printData() {
        console.log(`${this.author} ${this.text} ${this.date}`);
    }
}