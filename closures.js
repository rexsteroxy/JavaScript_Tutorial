//this simply means associating a data with a function
//binding a data with a function so that the will always go in pari pasu with each other

function sayHello(name){
    return function(){
        console.log('sayHello '+ name)
    }
}

let Austin = sayHello('Austin');
Austin();
let Winner = sayHello('Winner');
Winner();