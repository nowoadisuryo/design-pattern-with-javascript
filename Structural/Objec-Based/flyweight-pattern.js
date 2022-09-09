// This is a structural design pattern focused on
// efficient data sharing through fine-grained
// objects. It is used for efficiency and memory
// conservation purposes.

// This pattern can be used for any kind of caching purposes.

class IceCream {
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}

// Factory for Flyweight objects
class IceCreamFactory {
    constructor() {
        this._iceCreams = [];
    }

    createIceCream(flavour, price) {
        let iceCream = this.getIceCream(flavour);
        if(iceCream) {
            return iceCream;
        } else {
            const newIceCream = new IceCream(flavour, price);
            this._iceCreams.push(newIceCream);
            return newIceCream;
        }
    }

    getIceCream(flavour) {
        return this._iceCreams.find(iceCream => iceCream.flavour === flavour);
    }
}

// Usage
const factory = new IceCreamFactory();

const chocoVanilla = factory.createIceCream('Choco and Vanilla', 10);
const vanillaChoco = factory.createIceCream('Choco and Vanilla', 10);
const strawberryChoco = factory.createIceCream('Strawberry and Choco', 15);

console.log(chocoVanilla === vanillaChoco);
console.log(chocoVanilla === strawberryChoco);