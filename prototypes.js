originalCar = {
    make: 'bmw',
    price: 7000,
    year: 2018
}

let newCar = Object.create(originalCar);
console.log(newCar.price);
newCar.make = 'toyota';
console.log(newCar.make);