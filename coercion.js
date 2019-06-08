//this simply means converting a datatype from one form to another

let a = 6;
let b = '7';
b = parseInt(b, 10);
let c = a + b;
console.log ('Answer: ' + c);

let d = parseInt('hello',10);
let e = isNaN(d);
console.log(e);