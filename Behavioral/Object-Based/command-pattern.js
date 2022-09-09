// This is a behavioural design pattern
// that aims to encapsulate actions
// or operations as objects.

// This pattern allows loose coupling
// of systems and classes by separating
// the objects that request an operation
// or invoke a method from the ones that
// execute or process the actual
// implementation.

// It encapsulated operations can be
// tracked to redo or undo operations.

class SpecialMath {
    constructor(num) {
        this._num = num;
    }

    square() {
        return this._num ** 2;
    }

    cube() {
        return this._num ** 3;
    }

    squareRoot() {
        return Math.sqrt(this._num);
    }
}

class Command {
    constructor(subject) {
        this._subject = subject;
        this.commandsExecuted = [];
    }

    execute(command) {
        this.commandsExecuted.push(command);
        return this._subject[command]();
    }
}

// usage
const x = new Command(new SpecialMath(5));
console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.commandsExecuted); // ['square', 'cube']