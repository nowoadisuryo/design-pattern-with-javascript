// In this, we use a sort of a
// “skeleton” of an existing object
// to create or instantiate new objects.

const car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    }
}

const myCar = Object.create(car, { owner: { value: 'John' } });

console.log(myCar.owner);
console.log(myCar.start());
console.log(myCar.stop());