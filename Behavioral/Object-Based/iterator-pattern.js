// It is a behavioural design pattern
// that provides a way to access the
// elements of an aggregate object
// sequentially without exposing its
// underlying representation.

// Iterators have a special kind of
// behaviour where we step through an
// ordered set of values one at a time
// by calling next() until we reach the end.

// Using iterator
class IteratorClass {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return { value: this.data[this.index++], done: false }
                } else {
                    this.index = 0;
                    return { done: true }
                }
            }
        }
    }
}

// Using Generator
function* iteratorUsingGenerator(collection) {
    let nextIndex = 0;

    while (nextIndex < collection.length) {
        yield collection[nextIndex++];
    }
}

// Usage
const gen = iteratorUsingGenerator(["Hi", "Hello"]);

console.log(gen.next().value);
console.log(gen.next().value);