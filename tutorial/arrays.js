let a = [5, 6,33,56,26];
let b = ['name','school','age','state'];

console.log (a[2] = 95);
console.log('his ' + b[2] +' is: ' + a[2]);

console.log(typeof a);

console.log(a[8]);
console.log(b.length);

for(i=0; i < a.length; i++){
    console.log(a[i]);
}
a.pop();
a.pop();
a.pop();
a.push(33);
console.log(a);