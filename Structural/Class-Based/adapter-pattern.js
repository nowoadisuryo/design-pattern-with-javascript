// This pattern is often used
// to create wrappers for new
// refactored APIs so that other
// existing old APIs can still work with them

// Old interface
class OldCalculator {
    constructor() {
        this.operations = function (term1, term2, operation) {
            switch (operation) {
                case 'add':
                    return term1 + term2;
                case 'sub':
                    return term1 - term2;
                default:
                    return NaN;
            }
        }
    }
}

// New interface
class NewCalculator {
    constructor() {
        this.add = function (term1, term2) {
            return term1 + term2;
        }

        this.sub = function (term1, term2) {
            return term1 - term2;
        }
    }
}

// Adapter class
class CalcAdapter {
    constructor() {
        const newCalc = new NewCalculator();

        this.operations = function (term1, term2, operation) {
            switch (operation) {
                case 'add':
                    return newCalc.add(term1, term2);
                case 'sub':
                    return newCalc.sub(term1, term2);
                default:
                    return NaN;
            }
        }
    }
}

// Usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 3, 'add'));

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 3));

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 3, 'add'));