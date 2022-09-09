// This is a behavioural design pattern
// that provides a chain of loosely
// coupled objects. Each of these
// objects can choose to act on or
// handle the request of the client.

class CumulativeSum {
    constructor(initialValue = 0) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

// Usage
const sum1 = new CumulativeSum();
console.log(sum1.add(5).add(2).add(3).sum);

const sum2 = new CumulativeSum(5);
console.log(sum2.add(2).add(3).sum);