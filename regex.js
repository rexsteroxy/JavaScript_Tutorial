let pattern = /abc/;
console.log(pattern);
console.log(typeof pattern);

let value = "this is abc a text";
 console.log(pattern.test(value));

 console.log(value.replace(pattern, 'just'));
 console.log(value.match(pattern));
 console.log(value.index);
    
    
