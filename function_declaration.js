function sayHello(){
    console.log('Hello Ninja Austin');
}
sayHello();
let a = sayHello;
a();
a();

function sayHelloTo(name){
    console.log('Hello Ninja '+ name );
}
sayHelloTo('Austin');
sayHelloTo('winner');

function addNumber(num1,num2){
    let result = num1 + num2;
    return result;
}

let answer = addNumber(45,33);
console.log(answer);