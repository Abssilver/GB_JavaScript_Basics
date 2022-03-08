"use strict";

function AttachedPostES5(author, text) {
    PostES5.call(this, author, text);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function (isHighlighted) {
    this.highlighted = isHighlighted;
};

AttachedPostES5.prototype.printData = function () {
    console.log(`${this.author} ${this.text} ${this.date} ${this.highlighted}`);
};