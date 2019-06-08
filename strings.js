console.log('hello world form Austin'.toUpperCase());

let number = '5,3,6,7,54,77,72,543';

let Mysplit = number.split(',');
console.log(Mysplit);

let name = 'hello where are you going to';

console.log(name.slice(6,13));

mySubString = name.substr(2,5);
console.log(mySubString);

/* we alse have functions which include
endsWith, startsWith, includes, repeat */

let mytrim = '     Austin      ';
console.log(mytrim.length);
console.log(mytrim.trim().length)