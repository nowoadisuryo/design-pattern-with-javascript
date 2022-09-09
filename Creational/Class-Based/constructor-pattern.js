//Before ES6
// function Hero(name, specialAbility) {
//     this.name = name;
//     this.specialAbility = specialAbility;

//     this.getDetails = function () {
//         return this.name + ' can ' + this.specialAbility;
//     }
// }

//After ES6
class Hero {
    constructor(name, specialAbility) {
        this._name = name;
        this._specialAbility = specialAbility;

        this.getDetails = function () {
            return `${this._name} can ${this._specialAbility}`;
        }
    }
}

const ironMan = new Hero('Iron Man', 'shot laser beam');

console.log(ironMan.getDetails());