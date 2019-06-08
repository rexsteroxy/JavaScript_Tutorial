let a = [5, 6,33,56,26];
let b = ['name','school','age','state'];

//lets combine arrays here

let combine = a.concat(b);
console.log(combine);
console.log(b.join('-'));

/* we also have the 
pop push shift unshift array functions
 */
console.log(b);
console.log(b.reverse());
console.log(b.sort());

let filtered = combine.filter( (c) => { if (c <= 28){
    return c;
}})
console.log(filtered);

b.forEach( (name) => { console.log(`hello ${name}`)});
/* we also have other functions which include
some every */