// This pattern is frequently used when we need
// to manage or manipulate collections of objects
// that are different yet have many similar characteristics.

class BallFactory {
    constructor() {
        this.createBall = function (type) {
            let ball;
            if (type === 'football' || type === 'soccer') ball = new Football();
            else if (type === 'basketball') ball = new Basketball();
            ball.roll = function () {
                return `The ${this._type} is rolling.`
            }

            return ball;
        }
    }
}

class Football {
    constructor() {
        this._type = 'football';
        this.kick = function () {
            return 'You kicked the football.';
        }
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball';
        this.bounce = function() {
            return 'You bounced the basketball.';
        }
    }
}

const factory = new BallFactory();

const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');

console.log(myFootball.kick());
console.log(myFootball.roll());
console.log(myBasketball.bounce());
console.log(myBasketball.roll());