// This is a behavioural design pattern
// based on defining the skeleton of the
// algorithm or implementation of an operation,
// but deferring some steps to subclasses.

// It lets subclasses redefine certain steps
// of an algorithm without changing the
// algorithm’s outward structure.

class Employee {
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    work() {
        return `${this._name} handles ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this._name} got paid ${this._salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'application development';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'testing';
    }
}

// usage
const dev = new Developer('Nathan', 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Brian', 90000);
console.log(tester.getPaid());
console.log(tester.work());