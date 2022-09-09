// Focuses on the ability to add behaviour
// or functionalities to existing classes dynamically

class Book {
    constructor(title, author, price) {
        this._title = title;
        this._author = author;
        this._price = price;
    }

    getDetails() {
        return `${this._title} by ${this._author}`;
    }
}

// Decorator 1
function giftWrap(book) {
    book.isGiftWrapped = true;
    book.unwrap = function () {
        return `Unwrapped ${book.getDetails()}`;
    }

    return book;
}

// Decorator 2
function hardbindBook(book) {
    book.isHardbound = true;
    book._price += 5;
    return book;
}

// Usage
const alchemist = giftWrap(new Book('The Alchemist', 'Paulo Coelho', 10));
console.log(alchemist.isGiftWrapped); // true
console.log(alchemist.unwrap()); // 'Unwrapped The Alchemist by Paulo Coelho'

const inferno = hardbindBook(new Book('Inferno', 'Dan Brown', 15));

console.log(inferno.isHardbound); // true
console.log(inferno._price); // 20