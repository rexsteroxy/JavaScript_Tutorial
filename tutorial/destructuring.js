let a , b, c, d;

let name = ['osondu','miracle','chioma','mirah'];

[a, b, c, d] =name;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let year, model;

({year,model} = {
    car: 'toyota',
    year: 2016,
    model: 'helloworld'

})
console.log(year);
console.log(model);