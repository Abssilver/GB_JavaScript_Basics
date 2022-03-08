"use strict";

function PostES5(author, text) {
    this.author = author;
    this.text = text;
    this.date = new Date();
}

PostES5.prototype.edit = function (text) {
    this.text = text;
    this.date = new Date();
};

PostES5.prototype.printData = function () {
    console.log(`${this.author} ${this.text} ${this.date}`);
};