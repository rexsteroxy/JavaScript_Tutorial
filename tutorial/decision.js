let number = 55;
if (number >= 80){
    console.log('please go an be with God');
}else{
    console.log('u still have work to do on earth');
}

//using switch statement
let hero = '';
switch(hero.toLocaleLowerCase()){
    case 'spiderman':
    console.log('not goog enough');
    console.log('manageable');
    break;
    case 'superman':
    console.log('good enough');
    break;
    default:
    console.log('try again');
}

//using ternary operator
let a = 2; let b = '2';
let result = (a === b) ? 'equal' : 'unequal';
console.log(result);