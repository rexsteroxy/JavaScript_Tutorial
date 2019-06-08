//declaration
class Car {
    constructor(price,make, model){
        this.price = price,
        this.make = make,
        this.model = model
    }

    print(){
        console.log(`(${this.price}) ${this.make} ${this.model}`);
    }
}

let newCar = new Car(70000,'bmw','rangerover');
console.log(newCar);
newCar.print();


class SportsCar extends Car{

}
 let newSportsCar = new SportsCar(50000,'corolla','menz');
 console.log(newSportsCar);

//expression
let car = class{

}